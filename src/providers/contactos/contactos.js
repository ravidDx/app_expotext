var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the ContactosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ContactosProvider = /** @class */ (function () {
    function ContactosProvider(http) {
        this.http = http;
        //url:string = "http://192.168.0.23/api/contacts";
        //url2:string = "http://192.168.0.23/api/perfil";
        this.url = "http://192.168.0.106/api/contacts";
        this.url2 = "http://192.168.0.106/api/perfil";
        console.log('Hello ContactosProvider Provider');
    }
    //Metodo que devuelve el contacto leido desde la qr
    ContactosProvider.prototype.leerContacto = function (email) {
        console.log("Provider");
        return this.http.get(this.url2 + '/' + email).map(function (res) {
            console.log("¡ Solicitud recibida !");
            return res;
        }, function (err) {
            console.log("¡ Solicitud recibida !");
            return err;
        });
    };
    //Metodo que guardar el contacto al usuario
    ContactosProvider.prototype.registerContacto = function (contactos) {
        console.log("Registrar contacto");
        this.cabecera = new HttpHeaders().set('content-type', 'application/json');
        this.cabecera.set('Access-Control-Allow-Origin', '*');
        this.cabecera.set('Access-Control-Allow-Credentials', 'true');
        this.cabecera.set('Access-Control-Allow-Headers', 'Content-Type');
        this.cabecera.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        var body = JSON.stringify(contactos);
        return this.http.post(this.url, contactos, { headers: this.cabecera }).map(function (res) {
            console.log("¡ Solicitud recibida !");
            return res;
        }, function (err) {
            console.log("¡ Solicitud recibida !");
            return err;
        });
    };
    //Metodo que devuelve todos los cantactos del usuario
    ContactosProvider.prototype.allContactos = function (idUser) {
        console.log("Provider");
        return this.http.get(this.url + '/' + idUser).map(function (res) {
            console.log("¡ Solicitud recibida !");
            return res;
        }, function (err) {
            console.log("¡ Solicitud recibida !");
            return err;
        });
    };
    ContactosProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ContactosProvider);
    return ContactosProvider;
}());
export { ContactosProvider };
//# sourceMappingURL=contactos.js.map