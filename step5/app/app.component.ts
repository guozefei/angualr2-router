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
      <a href="#/crisis-center">Crisis center normal a</a>
      <a routerLink="/crisis-center" routerLinkActive="active active2">Crisis Center</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/admin" routerLinkActive="active">Admin</a>
      <a [routerLink]="['/', 'hero', 11]" routerLinkActive="active">Hero 11</a>
      <a [routerLink]="['/', 'hero', 12, {flag: true}]" routerLinkActive="active">Hero 12 with data</a>
      <a [routerLink]="['/', 'hero', 13]" fragment="section" routerLinkActive="active">Hero 13</a>
      <a [routerLink]="['/', 'hero', {flag: true}, 14]" [queryParams]="{q:1}" routerLinkActive="active">Hero 14 with data with query</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
