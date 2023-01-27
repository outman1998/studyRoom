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

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { DetailsComponent } from '../components/details/details.component';
import { MyCoursesComponent } from "../components/my-courses/my-courses.component";




@NgModule({
    declarations: [
        HomePage,
        FooterComponent,
        ReadComponent,
        CreateComponent,
        DetailsComponent,
        MyCoursesComponent
    ],
    imports: [
        Ng2SearchPipeModule,
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class HomePageModule {}
