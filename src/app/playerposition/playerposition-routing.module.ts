import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerpositionPage } from './playerposition.page';

const routes: Routes = [
  {
    path: '',
    component: PlayerpositionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerpositionPageRoutingModule {}
