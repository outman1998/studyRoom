import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

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
    FooterComponent,
    ReadComponent,
    CreateComponent
  ]
})
export class HomePageModule {}
