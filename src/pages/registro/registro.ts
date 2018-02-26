import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn} from '@angular/forms';
import {UsuariosProvider} from '../../providers/usuarios/usuarios';
import { ToastController } from 'ionic-angular'; //Importando Componente TOAS de IONIC




/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

 page=true;
 text="Paso 1 de 2";
 

  names: AbstractControl;
  last_names:AbstractControl;
  cedula: AbstractControl;
  birth:AbstractControl;
  email: AbstractControl;
  password:AbstractControl;
  re_password:AbstractControl;

  company: AbstractControl;
  activity:AbstractControl;
  id_category: AbstractControl;
  city:AbstractControl;
  user_address: AbstractControl;
  phone:AbstractControl;


  errorMessage:string = null;
  registroForm : FormGroup;
  hidden=true;
  valor;


  constructor(public navCtrl: NavController, 
  	          public navParams: NavParams,
  	          private fb:FormBuilder,
              private usuariosCtrl:UsuariosProvider,
              private toastCtrl:ToastController,
              private loadingCtrl:LoadingController) 
  {

  	this.registroForm = fb.group({
      'names' : ['',Validators.compose([Validators.required , Validators.maxLength(15) ])],
      'last_names' : ['',Validators.compose([Validators.required ,Validators.maxLength(15)])],
      'cedula' : ['',Validators.compose([Validators.required , Validators.maxLength(15) ])],
      'email' : ['',Validators.compose([Validators.required,Validators.email])],
      'password' : ['',Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15) ])],
      're_password': ['',Validators.compose([Validators.required, this.equalto('password')  ])], 
      'birth' : ['',Validators.compose([Validators.required])],
      'company' : ['',Validators.compose([Validators.required ,Validators.maxLength(25)  ])],
      'activity' : ['',Validators.compose([Validators.required , Validators.maxLength(40) ])],
      'city' : ['',Validators.compose([Validators.required ,Validators.maxLength(10) ])],
      'user_address' : ['',Validators.compose([Validators.required,Validators.maxLength(40) ])],
      'phone' : ['',Validators.compose([Validators.required, Validators.maxLength(15) ] )],
      'id_category' : ['',Validators.compose([Validators.required])],
    });

    this.names = this.registroForm.controls['names'];
    this.last_names = this.registroForm.controls['last_names'];
    this.cedula = this.registroForm.controls['cedula'];   
    this.email = this.registroForm.controls['email'];
    this.password = this.registroForm.controls['password'];
    this.re_password = this.registroForm.controls['re_password'];
    this.birth = this.registroForm.controls['birth'];
    this.company = this.registroForm.controls['company'];
    this.activity = this.registroForm.controls['activity'];
    this.city = this.registroForm.controls['city'];
    this.user_address = this.registroForm.controls['user_address'];
    this.phone = this.registroForm.controls['phone'];
    this.id_category = this.registroForm.controls['id_category'];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  //Ir a Page 2 de Registro
  irRegistroPage2(){
  	if(this.page==true){
        console.log("Registro Page 2");
    	this.page=false;
    	this.text="Paso 2 de 2";
      
    
   	}
   
  }

   //Ir a Page 1 de Registro
  irRegistroPage1(){
   	if(this.page==false){
        console.log("Registro Page 1");
    	this.page=true;
    	this.text="Paso 1 de 2";		
   	}else{
        this.navCtrl.pop();
   	}

  }

  //Guardando usuario en el servidor
  guardarUsuario(){
    console.log("Guardar Usuario");
    let loading = this.loadingCtrl.create({
        content: 'Por favor espere...'
    });

    loading.present();
    let user ={
      'names':this.names.value,
      'last_names':this.last_names.value,
      'cedula':this.cedula.value,
      'birth':this.birth.value,
      'email':this.email.value, 
      'password':this.password.value,
      'company' :this.company.value, 
      'activity':this.activity.value,
      'city' :this.city.value, 
      'user_address':this.user_address.value,
      'phone': this.phone.value,
      'id_category' :this.id_category.value,
      'id_role':'5'
    }
    console.log(user);
        
    this.usuariosCtrl.registerUser(user).subscribe(
      res => {
          console.log("OK.");
          console.log(res);
          this.registroForm.reset();
          loading.dismiss();
          this.lanzarMensaje('Registro exitoso!');
          this.navCtrl.pop();   
      },
      err =>{
          console.log("Error");
          console.log(err);
          loading.dismiss();
          this.lanzarMensaje('Error al guardar!'+ err);

      }

    );
  }


  //Para verificar si las contraseñas son iguales
  equalto(field_name): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      let input = control.value;
      let isValid=control.root.value[field_name]==input
      if(!isValid) 
        return { 'equalTo': {isValid} }
        else 
        return null;
      };
    }


   lanzarMensaje(text:any){
      let toast = this.toastCtrl.create({
        message:text,
        duration:3000,
        position:'top'
      });
      toast.present();
    }





}
