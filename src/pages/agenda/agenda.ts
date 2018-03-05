import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
//import { CalendarComponentOptions } from 'ion2-calendar'
//Servicio
import {EventosProvider} from '../../providers/eventos/eventos';

/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {

  
  eventosList:any;
  fecha:any;

  //Arreglo de imagenes de logos y auspiciantes
  imgsAuspiciantes=[
      {
        id:"1",
        name:"logo-capeipi-textil-xpotex",
        img:"../../assets/imgs/logos/1.logo-capeipi-textil-xpotex.png"
      },
      {
        id:"2",
        name:"logo-capeipi-xpotex",
        img:"../../assets/imgs/logos/2.logo-capeipi-xpotex.png"
      },
      {
        id:"3",
        name:"logo-ceq-xpotex",
        img:"../../assets/imgs/logos/3.logo-ceq-xpotex.png"
      },
      {
        id:"4",
        name:"logo-gadpp-xpotex",
        img:"../../assets/imgs/logos/4.logo-gadpp-xpotex.png"
      },
      {
        id:"5",
        name:"logo-ministerio-inductrias-productividad-xpotex",
        img:"../../assets/imgs/logos/5.logo-ministerio-inductrias-productividad-xpotex.png"
      }
  ]

  constructor(public navCtrl: NavController, 
  	          public navParams: NavParams,
              public eventosCtrl:EventosProvider,
              private alertCtrl: AlertController,
              public loadingCtrl: LoadingController) 
  {


  
   

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');

    /*
    let loading = this.loadingCtrl.create({
        content: 'Por favor espere...'
    });

    loading.present();
    */
    //Consulta de las empresas en el Servidor

  }


    //Se ejecuta cuando entras en una página, antes de cargarla. 
  ionViewWillEnter(){
    console.log('ionViewWillEnter ExpositoresPage');

      
  }


  onEventos(dia:any){
    let loading = this.loadingCtrl.create({
        content: 'Por favor espere...'
    });

    loading.present();

    this.eventosCtrl.getAllEventos(dia).subscribe(
      data=>{
        console.log("status: ok");
        this.eventosList=data;
        console.log(this.eventosList);
        loading.dismiss();
      },
      err=>{
        console.log("status: error");
        console.log(err);
        loading.dismiss();
        
      });

      if(dia == 16){
        this.fecha = "16. Mar 2018";
      }else  if(dia == 17){
        this.fecha = "17. Mar 2018";
      }else if(dia == 18){
        this.fecha = "18. Mar 2018";
      }
    

      
  }

  presentInform(i:any){

  }




}
