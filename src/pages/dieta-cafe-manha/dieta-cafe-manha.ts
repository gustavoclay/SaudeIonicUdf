import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DietaPage } from './../dieta/dieta';

/**
 * Generated class for the DietaCafeManhaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dieta-cafe-manha',
  templateUrl: 'dieta-cafe-manha.html',
})
export class DietaCafeManhaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DietaCafeManhaPage');
  }

}
