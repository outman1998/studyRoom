import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ForloebComponent } from './components/forloeb/forloeb.component';

import {HttpClientModule} from '@angular/common/http';
import { ApiserviceService } from './services/apiservice.service';

@NgModule({
  declarations: [AppComponent, ForloebComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    ApiserviceService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
