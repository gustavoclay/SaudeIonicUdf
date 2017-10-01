import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { IMcPage } from '../i-mc/i-mc';
import { DietaPage } from '../dieta/dieta';
import { SobreNsPage } from '../sobre-ns/sobre-ns';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = IMcPage;
  tab3Root: any = DietaPage;
  tab4Root: any = SobreNsPage;
  constructor(public navCtrl: NavController) {
  }

}
