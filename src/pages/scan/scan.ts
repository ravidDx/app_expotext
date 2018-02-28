import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {ContactosProvider} from '../../providers/contactos/contactos';
import { ToastController } from 'ionic-angular'; //Importando Componente TOAS de IONIC
import { ContactosPage } from '../index.pages'

/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {

  scannedCode:any;
  email:any;
  message:any;

  idUser:any; //contacto 1
  idContacto:any; //contacto 2

  constructor(public navCtrl: NavController, 
  	          public navParams: NavParams,
  	          private barcodeScanner: BarcodeScanner,
              public loadingCtrl: LoadingController,
              public contactCtrl:ContactosProvider,
              private toastCtrl:ToastController) {

    this.idUser = navParams.data;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanPage');
  }

  leerQr(){
      let loading:any;
      this.barcodeScanner.scan().then((barcodeData) => {
      this.scannedCode = barcodeData.text;
      loading = this.loadingCtrl.create({
        content: 'Por favor espere...'
      });

      loading.present();

      let code = this.scannedCode.split("♥", 3);
      this.email = code[1];

      //consulta provider perfil
      this.contactCtrl.leerContacto(this.email).subscribe(
        data => {
           console.log('Status: Ok.');
            if(data['status']=='200'){
             console.log("Si existe usuario");
             this.message=data['data']['id'];  
             this.idContacto = data['data']['id'];
             //this.navCtrl.setRoot(MenuPage,{'parametro':data});
              let contactos={
                "contacto1": "",
                "contacto2": ""
              }

              contactos['contacto1'] = this.idUser;
              contactos['contacto2'] = this.idContacto;
              
              //consulta providers contactos
              this.contactCtrl.registerContacto(contactos).subscribe(
                 data =>{
                   console.log(data);
                   this.lanzarMensaje(data['message']);
                   
                 },
                 err => {
                   console.log(err);
                    this.lanzarMensaje('Error al guardar!'+ err);
                 });

           }else{
             console.log("No existe usuario");
             this.message="usuario no registrado";          
           }
            loading.dismiss();

         },
         err =>{
           console.log('Status: Err.');
           console.log(err);
           loading.dismiss();

         }

      );

      //Consultando perfil de usuario al servidor 


		 // Success! Barcode data is here
		}, (err) => {
		    console.log("Err");
         loading.dismiss();
		    
		});
  }



   lanzarMensaje(text:any){
      let toast = this.toastCtrl.create({
        message:text,
        duration:3000,
        position:'top'
      });
      toast.present();
    }





}
