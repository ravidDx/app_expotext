import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
//Servicio API
import {ApiProvider} from '../../providers/api/api';

/*
  Generated class for the CategoriasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoriasProvider {

  cabecera;
  url:string = this.apiCtrl.urlApi+"api/categorias/all";

  categoriasList:any[]=[];

  constructor(public http: HttpClient,
  			  public apiCtrl:ApiProvider) {
    console.log('Hello CategoriasProvider Provider');
     this.cabecera = new HttpHeaders().set('content-type', 'application/json');
    this.cabecera.set('Access-Control-Allow-Origin', '*');
    this.cabecera.set('Access-Control-Allow-Credentials', 'true');
    this.cabecera.set('Access-Control-Allow-Headers', 'Content-Type');
    this.cabecera.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  }

    /*METODOS*/
  /*--------------------------------------------------------*/

  //Funcion para obtener las empresas de la BD
  getAllCategorias(){
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
