import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage, NavParams } from 'ionic-angular';
import { DietaCafeManhaPage } from './../dieta-cafe-manha/dieta-cafe-manha';
import { DietaAlmocoPage } from './../dieta-almoco/dieta-almoco';
import { DietaLanchePage } from './../dieta-lanche/dieta-lanche';
import { DietaJantaPage } from './../dieta-janta/dieta-janta';

@Component({
  selector: 'page-dieta',
  templateUrl: 'dieta.html'
})
export class DietaPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToCafeManhaPage() {
    this.navCtrl.push(DietaCafeManhaPage);
  }
  
  goToAlmocoPage() {
    this.navCtrl.push(DietaAlmocoPage);
  }

  goToLanchePage() {
    this.navCtrl.push(DietaLanchePage);
  }

  goToJantaPage() {
    this.navCtrl.push(DietaJantaPage);
  }

 
}
