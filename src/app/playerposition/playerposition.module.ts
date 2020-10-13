import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerpositionPageRoutingModule } from './playerposition-routing.module';

import { PlayerpositionPage } from './playerposition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerpositionPageRoutingModule
  ],
  declarations: [PlayerpositionPage]
})
export class PlayerpositionPageModule {}
