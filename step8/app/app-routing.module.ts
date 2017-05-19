import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';
// import { HeroListComponent }  from './hero-list.component';  // <-- delete this line
import { PageNotFoundComponent } from './not-found.component';
import { ComposeMessageComponent } from './compose-message.component';
import {AuthGuard} from './auth-guard.service';
const appRoutes: Routes = [
  {
  path: 'compose',
  component: ComposeMessageComponent,
  outlet: 'popup'
},
{ path: 'lazy', loadChildren: 'app/lazy/lazy.module#LazyModule', canLoad:[AuthGuard] },
  // { path: 'heroes',     component: HeroListComponent }, // <-- delete this line
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
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
