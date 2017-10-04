import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DietaJantaPage } from './dieta-janta';

@NgModule({
  declarations: [
    DietaJantaPage,
  ],
  imports: [
    IonicPageModule.forChild(DietaJantaPage),
  ],
})
export class DietaJantaPageModule {}
