import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalchoosePageRoutingModule } from './modalchoose-routing.module';

import { ModalchoosePage } from './modalchoose.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalchoosePageRoutingModule
  ],
  declarations: [ModalchoosePage]
})
export class ModalchoosePageModule {}
