// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { Crisis, CrisisService }  from './crisis.service';
@Component({
  template: `
    <h2>CRISES</h2>
    <ul class="items">
      <li *ngFor="let crisis of crises | async"
        [class.selected]="isSelected(crisis)"
        (click)="onSelect(crisis)">
        <span class="badge">{{ crisis.id }}</span> {{ crisis.name }}
      </li>
    </ul>
    <button routerLink="/sidekicks">Go to sidekicks</button>
  `
})
export class CrisisListComponent implements OnInit {
  crises: Observable<Crisis[]>;
  private selectedId: number;
  constructor(
    private service: CrisisService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.crises = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.service.getCrises();
      });
  }
  isSelected(crisis: Crisis) { return crisis.id === this.selectedId; }
  onSelect(crisis: Crisis) {
    let sessionId = 1;
    let navigationExtras : NavigationExtras = {
      queryParams: {'session_id': sessionId},
      fragment: 'anchor'
    }
    this.router.navigate(['/crisis-center', crisis.id], navigationExtras);
  }
}
