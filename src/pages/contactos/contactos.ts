import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { PerfilContactoPage } from '../index.pages';
//Servicio
import {ContactosProvider} from '../../providers/contactos/contactos';


/**
 * Generated class for the ContactosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactos',
  templateUrl: 'contactos.html',
})
export class ContactosPage {
  idUser:any;
  contactosList:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public contactCtrl:ContactosProvider) {
      this.idUser = navParams.data;
      console.log("idUser: "+this.idUser);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactosPage');
  }

  //ir a page perfil contacto
  goPerfilContactoPage(){
    console.log('Ir a Pagina Pefil Contacto');
    this.navCtrl.push(PerfilContactoPage);
  }

    //Se ejecuta cuando entras en una página, antes de cargarla. 
  ionViewWillEnter(){
    console.log('ionViewWillEnter ExpositoresPage');

    let loading = this.loadingCtrl.create({
        content: 'Por favor espere...'
    });

    loading.present();
    
    //Consulta de las empresas en el Servidor
    this.contactCtrl.allContactos(this.idUser).subscribe(
      data=>{
        console.log("status: ok");
        this.contactosList=data;
        loading.dismiss();
      },
      err=>{
        console.log("status: error");
        console.log(err);
         loading.dismiss();
        
      })
      
  }

}
