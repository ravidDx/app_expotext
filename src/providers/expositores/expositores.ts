import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


/*
  Generated class for the ExpositoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExpositoresProvider {

  cabecera;

  //url:string = "http://127.0.0.1:8000/api/empresas/all";
  url:string = "http://192.168.0.22/api/empresas/all";
  //url:string = "http://localhost/api/empresas/all";
  
  empresasList:any[]=[];


  
  /*CONSTRUCTOR*/
  /*--------------------------------------------------------*/
  constructor(public http: HttpClient) {
    console.log('Hello ExpositoresProvider Provider');
    this.cabecera = new HttpHeaders().set('content-type', 'application/json');
    this.cabecera.set('Access-Control-Allow-Origin', '*');
    this.cabecera.set('Access-Control-Allow-Credentials', 'true');
    this.cabecera.set('Access-Control-Allow-Headers', 'Content-Type');
    this.cabecera.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  }

  /*METODOS*/
  /*--------------------------------------------------------*/

  //Funcion para obtener las empresas de la BD
  getAllEmpresas(){
  	return this.http.get(this.url , { headers: this.cabecera } ).map(
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
