import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { ModalchoosePage } from '../modalchoose/modalchoose.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  guidelines: any;
  
  
  constructor(
    private modalController: ModalController,
    private router: Router,
    private loadingController: LoadingController
    ) {

      this.guidelines = [
        {
        "id": 0,
        "guideline_name": "Points",
        "description": "When a team makes a basket, they score two points and the ball goes to the other team.",
      },
      {
        "id": 1,
        "guideline_name": "Game Clock",
        "description": "Each game is divided into sections, and all levels have two halves. In college, each half is twenty minutes long."
      },
      {
        "id": 2,
        "guideline_name": "Basket Assignment",
        "description": "Also, each team is assigned a basket or goal to defend. This means that the other basket is their scoring basket. At halftime, the teams switch goals."
      },
      {
        "id": 3,
        "guideline_name": "Fouls and Violations",
        "description": "In addition to stealing the ball from an opposing player, there are other ways for a team to get the ball. One such way is if the other team commits a foul or violation.."
      },
    ]
    

    }

    async presentHalfModal() {
      const modal = await this.modalController.create({
        component: ModalchoosePage,
        cssClass: 'half-modal'
      });
      return await modal.present();
    }


    filterProductData(event: any) {
      this.guidelines = [
        {
        "id": 0,
        "guideline_name": "Points",
        "description": "When a team makes a basket, they score two points and the ball goes to the other team.",
        "full_description": "When a team makes a basket, they score two points and the ball goes to the other team. If a basket, or field goal, is made outside of the three-point arc, then that basket is worth three points. A free throw is worth one point. Free throws are awarded to a team according to some formats involving the number of fouls committed in a half and/or the type of foul committed. Fouling a shooter always results in two or three free throws being awarded the shooter, depending upon where he was when he shot. If he was beyond the three-point line, then he gets three shots."
      },
      {
        "id": 1,
        "guideline_name": "Game Clock",
        "description": "Each game is divided into sections, and all levels have two halves. In college, each half is twenty minutes long.",
        "full_description": "Each game is divided into sections, and all levels have two halves. In college, each half is twenty minutes long. In high school and below, the halves are divided into eight (and sometimes, six) minute quarters. In the pros, quarters are twelve minutes long. There is a gap of several minutes between halves. Gaps between quarters are relatively short."
      },
      {
        "id": 2,
        "guideline_name": "Basket Assignment",
        "description": "Also, each team is assigned a basket or goal to defend. This means that the other basket is their scoring basket. At halftime, the teams switch goals.",
        "full_description": "Also, each team is assigned a basket or goal to defend. This means that the other basket is their scoring basket. At halftime, the teams switch goals."
      },
      {
        "id": 3,
        "guideline_name": "Fouls and Violations",
        "description": "In addition to stealing the ball from an opposing player, there are other ways for a team to get the ball. One such way is if the other team commits a foul",
        "full_description": "In addition to stealing the ball from an opposing player, there are other ways for a team to get the ball. FOULS"
      },
    ]
    
   
    const val = event.target.value;
    if(val && val.trim() !== '') {
      this.guidelines = this.guidelines.filter((guideline) => {
        return (guideline.guideline_name.toLowerCase().indexOf(val.toLowerCase()) >-1);
      })
    }
      

    }

    viewDetailsGuide(guideline) {
      this.router.navigate(['/guide-details', {
        'id': guideline.id,
        'guideline_name': guideline.guideline_name,
        'description': guideline.description,
        'full_description': guideline.full_description
      }
    ])
    }

    async refreshPage() {
      const loading = await this.loadingController.create({
        duration:3000,
        message: 'Please wait...'
      });
      await loading.present();
      const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed! after 3 Seconds', { role, data });
    }
    

}
