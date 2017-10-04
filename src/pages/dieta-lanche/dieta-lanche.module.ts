import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DietaLanchePage } from './dieta-lanche';

@NgModule({
  declarations: [
    DietaLanchePage,
  ],
  imports: [
    IonicPageModule.forChild(DietaLanchePage),
  ],
})
export class DietaLanchePageModule {}
