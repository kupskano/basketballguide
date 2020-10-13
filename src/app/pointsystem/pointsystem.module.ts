import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PointsystemPageRoutingModule } from './pointsystem-routing.module';

import { PointsystemPage } from './pointsystem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PointsystemPageRoutingModule
  ],
  declarations: [PointsystemPage]
})
export class PointsystemPageModule {}
