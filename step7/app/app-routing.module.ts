import { NgModule }              from '@angular/core';
import { RouterModule, Routes, PreloadAllModules }  from '@angular/router';
import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';
// import { HeroListComponent }  from './hero-list.component';  // <-- delete this line
import { PageNotFoundComponent } from './not-found.component';
import { ComposeMessageComponent } from './compose-message.component';
const appRoutes: Routes = [
  {
  path: 'compose',
  component: ComposeMessageComponent,
  outlet: 'popup'
},
{ path: 'lazy', loadChildren: 'app/lazy/lazy.module#LazyModule' },
  // { path: 'heroes',     component: HeroListComponent }, // <-- delete this line
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ],
  providers : [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ]
})
export class AppRoutingModule {}
