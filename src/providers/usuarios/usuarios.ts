import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
//Servicio API
import {ApiProvider} from '../../providers/api/api';



/*
  Generated class for the UsuariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuariosProvider {

  url:string = this.apiCtrl.urlApi+"api/users";

  cabecera;


  constructor(public http: HttpClient,
              public apiCtrl:ApiProvider) {
    console.log('Hello UsuariosProvider Provider');
  }


  //Metodo que se conecta con el servidor y registra al usuario
  registerUser(usuario:any){

    	console.log("Registrar usuario");
    	this.cabecera = new HttpHeaders().set('content-type', 'application/json');
    	this.cabecera.set('Access-Control-Allow-Origin', '*');
    	this.cabecera.set('Access-Control-Allow-Credentials', 'true');
    	this.cabecera.set('Access-Control-Allow-Headers', 'Content-Type');
    	this.cabecera.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

    	//let body = JSON.stringify(usuario);
    	console.log(usuario);
	    return this.http.post(this.url,usuario, { headers: this.cabecera }).map(
	      res =>{
	        console.log("¡ Solicitud recibida !");
	        return res;
	      },
	      err =>{
	      	console.log("¡ Solicitud recibida !");
	        return err;
	      }
	    )
  }

  //Metodo que se conecta con el servidor para ver si existe el usuario
  loginUser(email:string,password:string){
    console.log("Provider");

    return this.http.get(this.url+'/'+email+"♥"+password).map(
      res => {
        console.log("¡ Solicitud recibida !");
        return res;
      },
      err=>{
        console.log("¡ Solicitud recibida !");
        return err;
      });


  }
  updateUser(user:any, id:any){
    this.cabecera = new HttpHeaders().set('content-type', 'application/json');
    this.cabecera.set('Access-Control-Allow-Origin', '*');
    this.cabecera.set('Access-Control-Allow-Credentials', 'true');
    this.cabecera.set('Access-Control-Allow-Headers', 'Content-Type');
    this.cabecera.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

    //let body = JSON.stringify(usuario);
    // http://192.168.0.26/api/users/2
    console.log(user);

    console.log(this.url+"/"+id);
    return this.http.put(this.url+"/"+id,user, { headers: this.cabecera }).map(
      res =>{
        console.log("¡ Solicitud recibida !");
        return res;
      },
      err =>{
        console.log("¡ Solicitud recibida !");
        return err;
      }
    )
  }





}
