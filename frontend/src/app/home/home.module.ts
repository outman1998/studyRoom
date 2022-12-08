import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeroComponent } from '../components/hero/hero.component';

import { NavComponent } from '../components/nav/nav.component';
import { LoginBtnComponent } from '../login-btn/login-btn.component';
import { ContentOneComponent } from '../components/content-one/content-one.component';
import { ContentTwoComponent } from '../components/content-two/content-two.component';
import { FooterComponent } from '../components/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    HeroComponent,
    NavComponent,
    ContentOneComponent,
    ContentTwoComponent,
    FooterComponent,
    LoginBtnComponent
  ]
})
export class HomePageModule {}
