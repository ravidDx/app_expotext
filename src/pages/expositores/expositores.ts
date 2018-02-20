import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

//Servicio
import {ExpositoresProvider} from '../../providers/expositores/expositores';

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
  urlLogo:string="http://127.0.0.1:8000/storage";
  

  /*CONSTRUCTOR*/
  /*--------------------------------------------------------*/
  constructor(public navCtrl: NavController, 
  	          public navParams: NavParams,
  	          public expositorCtrl:ExpositoresProvider,
  	          private alertCtrl: AlertController) {
  }

  /*METODOS*/
  /*--------------------------------------------------------*/

  // Se llama únicamente cuando cargas una página en memoria (push).
  ionViewDidLoad() {
  }

  //Se ejecuta cuando entras en una página, antes de cargarla. 
  ionViewWillEnter(){
    console.log('ionViewWillEnter ExpositoresPage');
    
    //Consulta de las empresas en el Servidor
    this.expositorCtrl.getAllEmpresas().subscribe(
      data=>{
      	console.log("status: ok");
        this.empresasList=data;
        console.log(this.empresasList);
      },
      err=>{
      	console.log("status: error");
        
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

}
