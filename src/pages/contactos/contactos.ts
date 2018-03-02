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
  backupContactosList:any;
  searchQuery: string = '';

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
  goPerfilContactoPage(id:any){
    console.log('Ir a Pagina Pefil Contacto');
    
    this.navCtrl.push(PerfilContactoPage,  {'contacto':this.contactosList[id]}  );
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
        this.backupContactosList=data;
        loading.dismiss();
      },
      err=>{
        console.log("status: error");
        console.log(err);
         loading.dismiss();
        
      })
      
  }


  //Metodo para inicializar el arreglo contactosList
  initializeIContactosList() {
       this.contactosList=this.backupContactosList;
  }
  

  //Metodo de busqueda
  getItems(ev: any) {
      // Reset items back to all of the items
      this.initializeIContactosList();


      // set val to the value of the searchbar
      let val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.contactosList = this.contactosList.filter((contacto) => {
          return (contacto.names.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
  }


  llamar(){
    //console.log(phone);

  }

  borrar(){
   // console.log(id);

  }



}
