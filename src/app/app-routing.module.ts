import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: 'modalchoose',
    loadChildren: () => import('./modalchoose/modalchoose.module').then( m => m.ModalchoosePageModule)
  },
  {
    path: 'guide-details',
    loadChildren: () => import('./guide-details/guide-details.module').then( m => m.GuideDetailsPageModule)
  },
  {
    path: 'playerposition',
    loadChildren: () => import('./playerposition/playerposition.module').then( m => m.PlayerpositionPageModule)
  },
  {
    path: 'coach',
    loadChildren: () => import('./coach/coach.module').then( m => m.CoachPageModule)
  },
  {
    path: 'pointsystem',
    loadChildren: () => import('./pointsystem/pointsystem.module').then( m => m.PointsystemPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
