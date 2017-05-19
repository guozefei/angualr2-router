import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule }     from './heroes/heroes.module';
import { CrisisCenterModule }   from './crisis-center/crisis-center.module';
import { ComposeMessageComponent } from './compose-message.component';
import { PageNotFoundComponent } from './not-found.component';
import {AuthGuard} from './auth-guard.service';
import {CanDeactivateGuard} from './deactive-guard.service';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    CrisisCenterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  providers: [
    AuthGuard,
    CanDeactivateGuard
  ],
  bootstrap: [ AppComponent ]
})
export default class AppModule { }
