import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ForloebComponent } from './components/forloeb/forloeb.component';
import { ReadComponent } from './components/read/read.component';
import { CreateComponent } from './components/create/create.component'


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'read',
    component: ReadComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'create/:id',
    component: CreateComponent,
    pathMatch: 'full'
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
