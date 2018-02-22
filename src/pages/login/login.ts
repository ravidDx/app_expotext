import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { DocumentViewerOptions } from '@ionic-native/document-viewer';
//importar componentes de Ionic
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

import { RegistroPage, TabsPage, ExpositoresPage } from '../index.pages';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  error:any;
  err:any;

  email: AbstractControl;
  password:AbstractControl;
  errorMessage:string = null;
  loginForm : FormGroup;
  hidden=true;
  valor;


  /*COSTRUCTOR*/
  /*-----------------------------------------------------------------------------*/
  constructor(public navCtrl: NavController,
  	          public navParams: NavParams,
  			      private document: DocumentViewer,
              private fb:FormBuilder,
              public loadingCtrl: LoadingController)
  {

  	//const options: DocumentViewerOptions = {title: 'My PDF'}
	  //this.err=this.document.viewDocument('assets/pdf/cuento.pdf', 'application/pdf', options);
	  //console.log(this.err.error);
    console.log("Contructor");
    this.loginForm = fb.group({
      'email' : ['',Validators.compose([Validators.required])],
      'password' : ['',Validators.compose([Validators.required])],
    });

    this.email = this.loginForm.controls['email'];
    this.password = this.loginForm.controls['password'];

  }



  /*METODOS*/
  /*-----------------------------------------------------------------------------*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  //ir a page registro
  goRegisterPage(){
    console.log('Registro de usuario');
    this.navCtrl.push(RegistroPage);
  }


  //Funcion Login
  login(){
    // console.log('Login');

    //this.navCtrl.push(ExpositoresPage);
    // var jsonLogin ={
    //   "email":this.email.value,
    //   "pass":this.password.value
    // };
    // localStorage.setItem("loginJson", JSON.stringify(jsonLogin));
    // var datos = JSON.parse(localStorage.getItem("loginJson"));
    // this.valor = datos.email +" "+datos.pass;
    this.navCtrl.setRoot(TabsPage);
  }



}
