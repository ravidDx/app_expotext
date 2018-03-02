import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerfilContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil-contacto',
  templateUrl: 'perfil-contacto.html',
})
export class PerfilContactoPage {

  contacto:any;
  urlLogo:string="http://192.168.0.106/storage";

  constructor(public navCtrl: NavController,
              public navParams: NavParams) 
  {
  	this.contacto = this.navParams.get("contacto");
	console.log(this.contacto);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilContactoPage');
  }

}
