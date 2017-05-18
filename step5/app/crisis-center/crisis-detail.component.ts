import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Crisis, CrisisService }  from './crisis.service';
@Component({
  template: `
  <h2>CRISES</h2>
  <div *ngIf="crisis">
    <h3>"{{ crisis.name }}"</h3>
    <div>
      <label>Id: </label>{{ crisis.id }}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="crisis.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="gotoCrises()">Back</button>
    </p>
  </div>`
})
export class CrisisDetailComponent implements OnInit {
  crisis: Crisis;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) {}
  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getCrisis(+params['id']))
      .subscribe((crisis: Crisis) => this.crisis = crisis);
  }
  gotoCrises() {
    let crisisId = this.crisis ? this.crisis.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/crisis-center', { id: crisisId, foo: 'foo' }]);
  }
}
