import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IMcPage } from '../i-mc/i-mc';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToIMC(params){
    if (!params) params = {};
    this.navCtrl.push(IMcPage);
  }
}
