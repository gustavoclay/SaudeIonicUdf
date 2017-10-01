import { InicioPage } from './../inicio/inicio';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignInPage } from '../sign-in/sign-in';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToInicioPage(params){
    if (!params) params = {};
    this.navCtrl.push(InicioPage);
  }
  goToSignIn(params){
    if (!params) params = {};
    this.navCtrl.push(SignInPage);
  }
}
