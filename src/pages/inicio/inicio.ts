import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { IMCPage } from '../i-mc/i-mc';
import { DietaPage } from '../dieta/dieta';
import { SobreNSPage } from '../sobre-ns/sobre-ns';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = IMCPage;
  tab3Root: any = DietaPage;
  tab4Root: any = SobreNSPage;
  constructor(public navCtrl: NavController) {
  }
  
}
