import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>Angular Router</h1>
    <i class="file_icon">
      <svg class="folder_icon">
        <use xlink:href="icons.svg#type_folder"></use>
      </svg>
    </i>
    <nav>
      <a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact</a>
      <a href="#/crisis-center">Crisis center normal a</a>
      <a routerLink="/crisis-center" routerLinkActive="active active2">Crisis Center</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a [routerLink]="['/', 'hero', 11]" routerLinkActive="active">Hero 11</a>
    </nav>
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
  `
})
export class AppComponent { }
