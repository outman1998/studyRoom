import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeroComponent } from '../components/hero/hero.component';

import { ContentOneComponent } from '../components/content-one/content-one.component';
import { ContentTwoComponent } from '../components/content-two/content-two.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ReadComponent } from '../components/read/read.component';

import { CreateComponent } from '../components/create/create.component';

import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [
    HomePage,
    HeroComponent,
    ContentOneComponent,
    ContentTwoComponent,
    FooterComponent,
    ReadComponent,
    CreateComponent
  ]
})
export class HomePageModule {}
