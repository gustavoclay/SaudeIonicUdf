import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DietaPage } from './../dieta/dieta';

/**
 * Generated class for the DietaAlmocoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dieta-almoco',
  templateUrl: 'dieta-almoco.html',
})
export class DietaAlmocoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DietaAlmocoPage');
  }

}
