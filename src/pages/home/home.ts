import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PerfilUsuarioPage } from '../index.pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   



  constructor(public navCtrl: NavController) {

  }

  goPerfilUsuarioPage(){
  	console.log("Ir a pagina Perfil Usuario");
  	this.navCtrl.push(PerfilUsuarioPage);
  }  



}
