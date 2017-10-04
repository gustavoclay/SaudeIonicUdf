import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DietaAlmocoPage } from './dieta-almoco';

@NgModule({
  declarations: [
    DietaAlmocoPage,
  ],
  imports: [
    IonicPageModule.forChild(DietaAlmocoPage),
  ],
})
export class DietaAlmocoPageModule {}
