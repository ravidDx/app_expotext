import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
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

  constructor(public navCtrl: NavController, 
  	          public navParams: NavParams,
  	          private calendar: Calendar,
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
