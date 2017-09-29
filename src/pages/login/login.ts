import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { HomePage } from '../home/home';
import { IMCPage } from '../i-mc/i-mc';
import { SignInPage } from '../sign-in/sign-in';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToWelcome(params){
    if (!params) params = {};
    this.navCtrl.push(WelcomePage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToIMC(params){
    if (!params) params = {};
    this.navCtrl.push(IMCPage);
  }goToSignIn(params){
    if (!params) params = {};
    this.navCtrl.push(SignInPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
}
