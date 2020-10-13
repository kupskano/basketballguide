import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pointsystem',
  templateUrl: './pointsystem.page.html',
  styleUrls: ['./pointsystem.page.scss'],
})
export class PointsystemPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.modalController.dismiss();
  }

}
