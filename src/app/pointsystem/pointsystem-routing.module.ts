import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PointsystemPage } from './pointsystem.page';

const routes: Routes = [
  {
    path: '',
    component: PointsystemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PointsystemPageRoutingModule {}
