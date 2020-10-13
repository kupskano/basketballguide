import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modalchoose',
  templateUrl: './modalchoose.page.html',
  styleUrls: ['./modalchoose.page.scss'],
})
export class ModalchoosePage implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

  playerPosition() {
    this.toastController.create({
      message: 'Please wait...',
      duration: 2000
    }).then((toast) => {
      toast.present();
      toast.onDidDismiss();
    }).then(() => {
      this.loadingController.create({
        duration:3000
      }).then((load) => {
        load.present();
        load.onDidDismiss();
      }).then(() => {
        this.router.navigate(['/playerposition'])
        
      })
    })
  }


  coachRole() {
    this.toastController.create({
      message: 'Please wait...',
      duration: 2000
    }).then((toast) => {
      toast.present();
      toast.onDidDismiss();
    }).then(() => {
      this.loadingController.create({
        duration:3000
      }).then((load) => {
        load.present();
        load.onDidDismiss();
      }).then(() => {
        this.router.navigate(['/coach'])
        
      })
    })
  }

  pointSystem() {
    this.toastController.create({
      message: 'Please wait...',
      duration: 2000
    }).then((toast) => {
      toast.present();
      toast.onDidDismiss();
    }).then(() => {
      this.loadingController.create({
        duration:3000
      }).then((load) => {
        load.present();
        load.onDidDismiss();
      }).then(() => {
        this.router.navigate(['/pointsystem'])
        
      })
    })
  }

}
