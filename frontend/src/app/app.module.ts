import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ForloebComponent } from './components/forloeb/forloeb.component';

import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [AppComponent, ForloebComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,     
    AuthModule.forRoot({
    domain: 'dev-l5ni5uzfmntgm850.us.auth0.com',
    clientId: 'RpKts7o2RhyYXRUE3f8Xhxv9ialCMhSi'
  })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
