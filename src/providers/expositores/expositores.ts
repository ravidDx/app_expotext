import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


/*
  Generated class for the ExpositoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExpositoresProvider {

  url:string = "http://127.0.0.1:8000/api/empresas/all";
  empresasList:any[]=[];


  
  /*CONSTRUCTOR*/
  /*--------------------------------------------------------*/
  constructor(public http: HttpClient) {
    console.log('Hello ExpositoresProvider Provider');
  }

  /*METODOS*/
  /*--------------------------------------------------------*/

  //Funcion para obtener las empresas de la BD
  getAllEmpresas(){
  	return this.http.get(this.url).map(
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
