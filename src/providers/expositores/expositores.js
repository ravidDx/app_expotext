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
  Generated class for the ExpositoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ExpositoresProvider = /** @class */ (function () {
    /*CONSTRUCTOR*/
    /*--------------------------------------------------------*/
    function ExpositoresProvider(http) {
        this.http = http;
        //url:string = "http://127.0.0.1:8000/api/empresas/all";
        //url:string = "http://localhost/api/empresas/all";
        //url:string = "http://192.168.0.23/api/empresas/all";
        this.url = "http://192.168.0.106/api/empresas/all";
        this.empresasList = [];
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
    ExpositoresProvider.prototype.getAllEmpresas = function () {
        return this.http.get(this.url, { headers: this.cabecera }).map(function (res) {
            console.log(" Solicitud recibida");
            return res;
        }, function (err) {
            console.log(" Solicitud recibida");
            return err;
        });
    };
    ExpositoresProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ExpositoresProvider);
    return ExpositoresProvider;
}());
export { ExpositoresProvider };
//# sourceMappingURL=expositores.js.map