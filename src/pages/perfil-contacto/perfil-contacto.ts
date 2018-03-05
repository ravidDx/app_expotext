import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//Servicio API
import {ApiProvider} from '../../providers/api/api';

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
  urlLogo:string=this.apiCtrl.urlApi+"storage";
  msg:string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
               public apiCtrl:ApiProvider) 
  {
  	this.contacto = this.navParams.get("contacto");
    console.log(this.contacto);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilContactoPage');
  }

}
