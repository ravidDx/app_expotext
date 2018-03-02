import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import {LoginPage} from "../login/login";
//Servicio API
import {ApiProvider} from '../../providers/api/api';
import {UsuariosProvider} from '../../providers/usuarios/usuarios';

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


  urlLogo:string=this.apiCtrl.urlApi+"storage";
  usuario:any;
  valido=true;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private usuariosCtrl:UsuariosProvider,
              public apiCtrl:ApiProvider) 
  {
             
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
  salir(){
    localStorage.removeItem("loginJson");
    this.navCtrl.setRoot(LoginPage);
    console.log("Estoy saliendo")
  }
  mostrar(){
    this.valido=false;
  };
  editar(){
    let user ={
      'names':this.usuario.names,
      'last_names':this.usuario.last_names,
      'cedula':this.usuario.cedula,
      'birth':this.usuario.birth,
      'email':this.usuario.email,
      'password':this.usuario.password,
      'company' :this.usuario.company,
      'activity':this.usuario.activity,
      'city' :this.usuario.city,
      'user_address':this.usuario.user_address,
      'phone': this.usuario.phone,
      'id_category' :this.usuario.id_category,
      'id_role':this.usuario.id_role
    };
    let id = 3;
    this.usuariosCtrl.updateUser(user, id).subscribe(
      data=>{
        console.log("funciona");
      },
      err=>{
        console.log("no funciona");
      }
    )
  }

}
