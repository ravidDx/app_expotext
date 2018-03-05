import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {ContactosProvider} from '../../providers/contactos/contactos';
import { ToastController } from 'ionic-angular'; //Importando Componente TOAS de IONIC
import { ContactosPage } from '../index.pages'
import { AlertController } from 'ionic-angular';
//Servicio API
import {ApiProvider} from '../../providers/api/api';

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
  
  /*Variables*/
  /*---------------------------------------------------------*/  
  urlLogo:string=this.apiCtrl.urlApi+"storage";
  //Arreglo de imagenes de portadas-pasarelas
  imgsSlider=[
    {
      id:"1",
      name:"portada-xpotex",
      img:"../../assets/imgs/slider/1-portada-xpotex.jpg"
    },
    {
      id:"2",
      name:"pasarela-xpotex",
      img:"../../assets/imgs/slider/2-pasarela-xpotex.jpg"
    },
    {
      id:"3",
      name:"noche-xpotex",
      img:"../../assets/imgs/slider/3-noche-xpotex.jpg"
    },
    {
      id:"4",
      name:"conferencias-xpotex",
      img:"../../assets/imgs/slider/4-conferencias-xpotex.jpg"
    },
    {
      id:"5",
      name:"networking-xpotex",
      img:"../../assets/imgs/slider/5-networking-xpotex.jpg"
    },
    {
      id:"6",
      name:"competencia-xpotex",
      img:"../../assets/imgs/slider/6-nueva-competencia-xpotex.jpg"
    }
  ]
  scannedCode:any;
  email:any;
  message:any;

  idUser:any; //contacto 1
  idContacto:any; //contacto 2

  userPerfil:any;

  //vARIABLES PARA EL LECTOR QR
  buttonText:any;
  load:any;
  options:any;
  scannedText:any;
  

  /*Contructor*/
  /*-----------------------------------------------------------*/
  constructor(public navCtrl: NavController, 
  	          public navParams: NavParams,
  	          private barcodeScanner: BarcodeScanner,
              public loadingCtrl: LoadingController,
              public contactCtrl:ContactosProvider,
              private toastCtrl:ToastController,
              private alertCtrl: AlertController,
              public apiCtrl:ApiProvider) {

    this.idUser = navParams.data;

  }
  
  /*Metodos*/
  /*-----------------------------------------------------------*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanPage');
  }

  //Metodo que scanea el codigo qr y agrega a contactos
  leerQr(){
      let loading:any;

      //Configuraciones del lector QR
      this.options = {
        formats: 'QR_CODE',
        prompt : "Por favor escanea el codigo QR"+ "\n"+ "para agregar a tus contactos",
        buttonText : 'Loading…',
        load : true,
        resultDisplayDuration:0
      }
       
       //Llamado a la lectuca del codigo qr
      this.barcodeScanner.scan(this.options).then((barcodeData) => {

        //Si cancela la lectura se ejecuta este if
       if (barcodeData.cancelled) {
            console.log("User cancelled the action!");
            this.buttonText = "Scan";
            this.load = false;
            return false;
        }

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
             this.userPerfil=data['data'];
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
                   
                    let img="<ion-thumbnail item-start> <img src= "+this.urlLogo+'/'+this.userPerfil['UrlFotoQR']+"></ion-thumbnail>";
                    let alert = this.alertCtrl.create({
                      title: img,
                      subTitle:"<br>"+this.userPerfil['names']+" "+this.userPerfil['last_names']+"<br>"+"Cedula: "+this.userPerfil['cedula']+"<br>"+"Email: "+this.userPerfil['email']+'<hr>'+'Telf: '+this.userPerfil['phone']+'<br>'+'Empresa: '+this.userPerfil['company']+'<br>'+'Actividad: '+this.userPerfil['activity'],
                      message:'<br>'+this.userPerfil['user_address'],
                      buttons: ['Ok']
                    });
                    alert.present();
                    this.lanzarMensaje(data['message']);
                                   
                 },
                 err => {
                   console.log(err);
                    this.lanzarMensaje('Error al guardar!'+ err);
                 });

           }else{
             console.log("No existe usuario");
             this.message="usuario no registrado";  
             this.lanzarMensaje(this.message);
                    
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
        duration:5000,
        position:'top',
        cssClass: "toast-container"
      });
      toast.present();
  }




 



}
