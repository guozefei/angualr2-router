import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent }    from './crisis-list.component';
import { CrisisDetailComponent }  from './crisis-detail.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisCenterComponent } from './crisis-center.component';
import { AuthGuard } from '../auth-guard.service';
import { CrisisDetailResolver }   from './crisis-detail-resolver.service';
const crisisCenterRoutes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        component: CrisisListComponent,
      },
      {
        path: ':id',
        canActivate: [AuthGuard],
        resolve: {
            crisis: CrisisDetailResolver
        },
        component: CrisisDetailComponent
      },
      {
        path: 'xx',
        component: CrisisCenterHomeComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CrisisDetailResolver
  ]
})
export class CrisisCenterRoutingModule { }
