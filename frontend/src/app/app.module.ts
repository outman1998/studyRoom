import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule} from '@angular/common/http';
import { ApiserviceService } from './services/apiservice.service';

import { AuthModule } from '@auth0/auth0-angular';
import { NavComponent } from './components/nav/nav.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'studyroomprojekt.eu.auth0.com',
      clientId: '3vwl5IyYtFQ1AGffYrnCNhAstvwcJ2gd'
    }),
  FormsModule,
  ReactiveFormsModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    ApiserviceService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
