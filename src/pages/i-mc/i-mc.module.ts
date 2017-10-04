import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IMcPage } from './i-mc';

@NgModule({
  declarations: [
    IMcPage,
  ],
  imports: [
    IonicPageModule.forChild(IMcPage),
  ],
})
export class IMcPageModule {}
