import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

//Servicio
import {ExpositoresProvider} from '../../providers/expositores/expositores';
//Servicio API
import {ApiProvider} from '../../providers/api/api';

/**
 * Generated class for the ExpositoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expositores',
  templateUrl: 'expositores.html',
})
export class ExpositoresPage {

  empresasList:any;
  backupEmpresasList:any;
  searchQuery: string = '';

  urlLogo:string=this.apiCtrl.urlApi+"storage";
  

  /*CONSTRUCTOR*/
  /*--------------------------------------------------------*/
  constructor(public navCtrl: NavController,
  	          public navParams: NavParams,
  	          public expositorCtrl:ExpositoresProvider,
  	          private alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public apiCtrl:ApiProvider) {
  }

  /*METODOS*/
  /*--------------------------------------------------------*/

  // Se llama únicamente cuando cargas una página en memoria (push).
  ionViewDidLoad() {
  }

  //Se ejecuta cuando entras en una página, antes de cargarla.
  ionViewWillEnter(){
    console.log('ionViewWillEnter ExpositoresPage');

    let loading = this.loadingCtrl.create({
        content: 'Por favor espere...'
    });

    loading.present();

    //Consulta de las empresas en el Servidor
    this.expositorCtrl.getAllEmpresas().subscribe(
      data=>{

      	console.log("status: ok");
        this.empresasList=data;
        this.backupEmpresasList=data;
        console.log(this.empresasList);
        loading.dismiss();
      },
      err=>{
      	console.log("status: error");
        console.log(err);
         loading.dismiss();

      })

  }

  //Funcion que presenta informacion de la empresa
  presentInform(id:any) {
  	let empresa:any = this.empresasList[id];
  	let img="<ion-thumbnail item-start> <img src= "+this.urlLogo+'/'+empresa['logo']+"></ion-thumbnail>";
	  let alert = this.alertCtrl.create({
	    title: img,
	    subTitle:"<br>"+empresa['name']+"<br>"+"Categoria:"+empresa['category']+"<br>"+"# Stand:"+empresa['num_Stand']+'<hr>'+'Telf. '+empresa['phone']+'<br>'+'Email. '+empresa['email']+'<br>'+'Web. '+empresa['web_link'],
	    message:'<br>'+empresa['description'],
	    buttons: ['Ok']
	  });
	  alert.present();
	}


   //Metodo para inicializar el arreglo contactosList
  initializeIContactosList() {
       this.empresasList=this.backupEmpresasList;
  }


  //Metodo de busqueda
  getItems(ev: any) {
      // Reset items back to all of the items
      this.initializeIContactosList();


      // set val to the value of the searchbar
      let val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.empresasList = this.empresasList.filter((empresa) => {
          return (empresa.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
  }

}
