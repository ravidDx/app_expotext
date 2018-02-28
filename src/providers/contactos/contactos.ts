import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ContactosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactosProvider {

  //url:string = "http://192.168.0.23/api/contacts";
  //url2:string = "http://192.168.0.23/api/perfil";
  
  url:string = "http://192.168.0.106/api/contacts";
  url2:string = "http://192.168.0.106/api/perfil";


  cabecera;  

  constructor(public http: HttpClient) {
    console.log('Hello ContactosProvider Provider');
  }


  //Metodo que devuelve el contacto leido desde la qr
  leerContacto(email:string){
    console.log("Provider");
    return this.http.get(this.url2+'/'+email).map(
      res => {
        console.log("¡ Solicitud recibida !");
        return res;
      },
      err=>{
        console.log("¡ Solicitud recibida !");
        return err;
      });
  }

  //Metodo que guardar el contacto al usuario
  registerContacto(contactos:any){
    console.log("Registrar contacto");
    this.cabecera = new HttpHeaders().set('content-type', 'application/json');
    this.cabecera.set('Access-Control-Allow-Origin', '*');
    this.cabecera.set('Access-Control-Allow-Credentials', 'true');
    this.cabecera.set('Access-Control-Allow-Headers', 'Content-Type');
    this.cabecera.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

    let body = JSON.stringify(contactos);
      
      return this.http.post(this.url,contactos, { headers: this.cabecera }).map(
        res =>{
          console.log("¡ Solicitud recibida !");
          return res;
        },
        err =>{
          console.log("¡ Solicitud recibida !");
          return err;    
      });
    
  }

  //Metodo que devuelve todos los cantactos del usuario
   allContactos(idUser:string){
    console.log("Provider");
    return this.http.get(this.url+'/'+idUser).map(
      res => {
        console.log("¡ Solicitud recibida !");
        return res;
      },
      err=>{
        console.log("¡ Solicitud recibida !");
        return err;
      });
  }

  

}
