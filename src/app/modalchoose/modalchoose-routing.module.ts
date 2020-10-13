import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalchoosePage } from './modalchoose.page';

const routes: Routes = [
  {
    path: '',
    component: ModalchoosePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalchoosePageRoutingModule {}
