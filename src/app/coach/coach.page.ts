import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.page.html',
  styleUrls: ['./coach.page.scss'],
})
export class CoachPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.modalController.dismiss();
  }

}
