import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {ApiProvider} from '../../providers/api/api';

/*
  Generated class for the EventosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventosProvider {
  
  url:string = this.apiCtrl.urlApi+"api/eventos";
 
  cabecera:any;

  constructor(public http: HttpClient,
              public apiCtrl:ApiProvider) {
    console.log('Hello EventosProvider Provider');
    this.cabecera = new HttpHeaders().set('content-type', 'application/json');
    this.cabecera.set('Access-Control-Allow-Origin', '*');
    this.cabecera.set('Access-Control-Allow-Credentials', 'true');
    this.cabecera.set('Access-Control-Allow-Headers', 'Content-Type');
    this.cabecera.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  }

  /*METODOS*/
  /*--------------------------------------------------------*/

  //Funcion para obtener las empresas de la BD

  getAllEventos(dia:any){
     
  	return this.http.get(this.url+'/'+dia, { headers: this.cabecera } ).map(
  		res => {
  			console.log(" Solicitud recibida");
       		return res;
  		},
  		err =>  {
  			console.log(" Solicitud recibida");
       		return err;

        });
   
   

    }  	
    
}
       