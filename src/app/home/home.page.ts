import { Component } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

// public On:boolean = true;
// constructor(public navCtrl: NavController){
  
// }

// change(){
//   console.log(this.On);
// }
public On:boolean = true;
  constructor(public navCtrl: NavController, public popoverController: PopoverController) {}

// async popclick(event){
//   const popover = await this.popoverController.create({
//     component: PopoverComponent,
//     event
//   });
// }
change(){
  // console.log(this.On);
  this.On;
}

async presentPopover(ev) {
  const popover = await this.popoverController.create({
    component: PopoverComponent,
    cssClass: 'popOver',
    event: ev,
    mode: 'ios',
    translucent: true
  });
  await popover.present();

  const { role } = await popover.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}

  }
