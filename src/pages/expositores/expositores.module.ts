import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpositoresPage } from './expositores';

@NgModule({
  declarations: [
    ExpositoresPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpositoresPage),
  ],
})
export class ExpositoresPageModule {}
