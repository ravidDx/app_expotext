import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilContactoPage } from './perfil-contacto';

@NgModule({
  declarations: [
    PerfilContactoPage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilContactoPage),
  ],
})
export class PerfilContactoPageModule {}
