import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { WelcomePage } from '../welcome/welcome';
import { HomePage } from '../home/home';
import { IMcPage } from '../i-mc/i-mc';

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html'
})
export class SignInPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToWelcome(params){
    if (!params) params = {};
    this.navCtrl.push(WelcomePage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToIMC(params){
    if (!params) params = {};
    this.navCtrl.push(IMcPage);
  }goToSignIn(params){
    if (!params) params = {};
    this.navCtrl.push(SignInPage);
  }
}
