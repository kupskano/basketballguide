import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-playerposition',
  templateUrl: './playerposition.page.html',
  styleUrls: ['./playerposition.page.scss'],
})
export class PlayerpositionPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.modalController.dismiss();
  }



}
