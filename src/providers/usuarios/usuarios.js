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
  Generated class for the UsuariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UsuariosProvider = /** @class */ (function () {
    function UsuariosProvider(http) {
        this.http = http;
        //url:string = "http://localhost:8000/api/users";
        //url:string = "http://192.168.0.23/api/users";
        this.url = "http://192.168.0.106/api/users";
        console.log('Hello UsuariosProvider Provider');
    }
    //Metodo que se conecta con el servidor y registra al usuario
    UsuariosProvider.prototype.registerUser = function (usuario) {
        console.log("Registrar usuario");
        this.cabecera = new HttpHeaders().set('content-type', 'application/json');
        this.cabecera.set('Access-Control-Allow-Origin', '*');
        this.cabecera.set('Access-Control-Allow-Credentials', 'true');
        this.cabecera.set('Access-Control-Allow-Headers', 'Content-Type');
        this.cabecera.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        //let body = JSON.stringify(usuario);
        console.log(usuario);
        return this.http.post(this.url, usuario, { headers: this.cabecera }).map(function (res) {
            console.log("¡ Solicitud recibida !");
            return res;
        }, function (err) {
            console.log("¡ Solicitud recibida !");
            return err;
        });
    };
    //Metodo que se conecta con el servidor para ver si existe el usuario
    UsuariosProvider.prototype.loginUser = function (email, password) {
        console.log("Provider");
        return this.http.get(this.url + '/' + email + "♥" + password).map(function (res) {
            console.log("¡ Solicitud recibida !");
            return res;
        }, function (err) {
            console.log("¡ Solicitud recibida !");
            return err;
        });
    };
    UsuariosProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], UsuariosProvider);
    return UsuariosProvider;
}());
export { UsuariosProvider };
//# sourceMappingURL=usuarios.js.map