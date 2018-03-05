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
  msg: string = '';
  msgConection:string ="";

  offLine=true;
  offLineLogoPerfil:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public contactCtrl:ContactosProvider) 
  {  
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
    this.msg=null;
    let loading = this.loadingCtrl.create({
        content: 'Por favor espere...'
    });

    loading.present();
    
    //Consulta de las empresas en el Servidor
    this.contactCtrl.allContactos(this.idUser).subscribe(
      data=>{
        console.log("status: ok");
        this.offLine=true;
        this.contactosList=data;
        this.backupContactosList=data;         
        this.setLocalStorage(data); //Enviamos valores al localStorage de contactos
        if (this.contactosList.length == 0) {
          this.msg="! Aun no tienes contactos ¡";
        }

        loading.dismiss();
      },
      err=>{
        console.log("status: error "+err.message);
        console.log(err); 
        this.offLine=false;
        this.msgConection="No tiene conexion a internet para actualizar datos!";

        //Si se produce un error al conectarse con el servidor se cargara los datos del LocalStorage
        let data = this.getLocalStorage();
        if(data!=null){
          console.log("Problemas con el servidor");
          this.contactosList=data;
          this.backupContactosList=data;     
          if (this.contactosList.length == 0) {
            this.msg="! Aun no tienes contactos ¡";
          }
        }

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

  //Metodo que envia valores al localStorage de contactos
  setLocalStorage(data:any){
    let jsonContactos ={
      "contactos":data,
      "imgPerfil":'assets/imgs/expositores/perfil.jpg'
    };

    localStorage.setItem("contactosJson", JSON.stringify(jsonContactos));
  }

  //Metodo que obtiene valores de localStorage de contactos
  getLocalStorage(){
    //Obteniendo valores del localStorage
    //localStorage.removeItem("contactosJson");
    let lclStorage = JSON.parse(localStorage.getItem("contactosJson"));
    console.log(lclStorage);
    if (lclStorage!= null){
      console.log("hay contactos en localstorage");
      this.offLineLogoPerfil=lclStorage.imgPerfil;
      return lclStorage.contactos;
    }
    return null;
  } 


}
