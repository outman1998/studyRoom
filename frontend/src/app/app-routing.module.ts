import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ReadComponent } from './components/read/read.component';
import { CreateComponent } from './components/create/create.component'
import { AuthGuard } from '@auth0/auth0-angular';
import { DetailsComponent } from './components/details/details.component';


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
    canActivate:[AuthGuard]
  },
  {
    path: 'create/:id',
    component: CreateComponent,
    pathMatch: 'full',
    canActivate:[AuthGuard]
  },
  {
    path: 'about-us',
    loadChildren: () => import('./whyPickUs/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    pathMatch: 'full',
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
