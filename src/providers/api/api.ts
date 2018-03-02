import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {


  //urlApi='http://192.168.0.26/';
  urlApi='http://192.168.0.106/';

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }



}
