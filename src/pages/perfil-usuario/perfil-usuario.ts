import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';

/**
 * Generated class for the PerfilUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil-usuario',
  templateUrl: 'perfil-usuario.html',
})
export class PerfilUsuarioPage {

 // urlLogo:string="http://localhost/storage";
  //urlLogo:string="http://192.168.0.23/storage";

  urlLogo:string="http://192.168.0.106/storage";
  usuario:any;
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController) {
  		this.usuario = this.navParams.get("usuario");
	  	console.log(this.usuario);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilUsuarioPage');
  }

   //Funcion que presenta el QR
  presentQr() {
    let img="<ion-thumbnail item-start> <img src= "+this.urlLogo+'/'+this.usuario['UrlFotoQR']+"></ion-thumbnail>";
    let alert = this.alertCtrl.create({
      title: img
    });
    alert.present();

  }

}
