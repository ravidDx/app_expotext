import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController,LoadingController,ToastController} from 'ionic-angular';
import {LoginPage} from "../login/login";
//Servicio API
import {ApiProvider} from '../../providers/api/api';
import {UsuariosProvider} from '../../providers/usuarios/usuarios';
import {FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn} from '@angular/forms';

/**
 * Generated class for the PerfilUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil-usuario',
  templateUrl: 'perfil-usuario.html',
})
export class PerfilUsuarioPage {


  urlLogo:string=this.apiCtrl.urlApi+"storage";
  usuario:any;
  valido=true;

  //names: AbstractControl;
  //last_names:AbstractControl;
  cedula: AbstractControl;
  //birth:AbstractControl;
  email: AbstractControl;
  //password:AbstractControl;
  //re_password:AbstractControl;

  company: AbstractControl;
  activity:AbstractControl;
  //id_category: AbstractControl;
  //city:AbstractControl;
  user_address: AbstractControl;
  phone:AbstractControl;

  editForm : FormGroup;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private usuariosCtrl:UsuariosProvider,
              public apiCtrl:ApiProvider,
              private toastCtrl:ToastController,
              private loadingCtrl:LoadingController,
              private fb:FormBuilder) 
  {
             
  	
    this.usuario = this.navParams.get("usuario");	
    this.editForm = fb.group({
      //'last_names' : ['',Validators.compose([Validators.required ,Validators.maxLength(15)])],
      'cedula' : [this.usuario.cedula,Validators.compose([Validators.required , Validators.maxLength(15) ])],
      'email' : [this.usuario.email,Validators.compose([Validators.required,Validators.email])],
      //'password' : ['',Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15) ])],
      //'re_password': ['',Validators.compose([Validators.required, this.equalto('password')  ])], 
      //'birth' : ['',Validators.compose([Validators.required])],
      'company' : [this.usuario.company,Validators.compose([Validators.required ,Validators.maxLength(25)  ])],
      'activity' : [this.usuario.activity,Validators.compose([Validators.required , Validators.maxLength(40) ])],
      //'city' : ['',Validators.compose([Validators.required ,Validators.maxLength(10) ])],
      'user_address' : [this.usuario.user_address,Validators.compose([Validators.required,Validators.maxLength(40) ])],
      'phone' : [this.usuario.phone,Validators.compose([Validators.required, Validators.maxLength(15) ] )]
      //'id_category' : ['',Validators.compose([Validators.required])],
    });

    //this.names = this.editForm.controls['names'];
    //this.last_names = this.editForm.controls['last_names'];
    this.cedula = this.editForm.controls['cedula'];   
    this.email = this.editForm.controls['email'];
    //this.password = this.editForm.controls['password'];
    //this.re_password = this.editForm.controls['re_password'];
    //this.birth = this.editForm.controls['birth'];
    this.company = this.editForm.controls['company'];
    this.activity = this.editForm.controls['activity'];
    //this.city = this.editForm.controls['city'];
    this.user_address = this.editForm.controls['user_address'];
    this.phone = this.editForm.controls['phone'];
    //this.id_category = this.editForm.controls['id_category'];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilUsuarioPage');
  }

   //Se ejecuta cuando entras en una página, antes de cargarla.
  ionViewWillEnter(){
    console.log('ionViewWillEnter PerfilUsuarioPage');
    console.log(this.usuario);
  }

   //Funcion que presenta el QR
  presentQr() {
    let img="<ion-thumbnail item-start> <img src= "+this.urlLogo+'/'+this.usuario['UrlFotoQR']+"></ion-thumbnail>";
    let alert = this.alertCtrl.create({
      title: img
    });
    alert.present();

  }

  salir(){

    let prompt = this.alertCtrl.create({
      title: 'Cerrar Sesión',
      message: "Esta Seguro de Cerrar sesión",
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
              localStorage.removeItem("loginJson");
              this.navCtrl.setRoot(LoginPage);
              console.log("Estoy saliendo")
                      
          }
        }
      ]
    });
    prompt.present();
  
  }

  mostrar(){
    
    this.valido=false;

  }

  editar(){
    let loading = this.loadingCtrl.create({
        content: 'Por favor espere...'
    });

    loading.present();

    let user ={
      //'names':this.names.value,
      //'last_names':this.last_names.value,
      'cedula':this.cedula.value,
      //'birth':this.birth.value,
      'email':this.email.value, 
      'password':this.usuario.value,
      'company' :this.company.value, 
      'activity':this.activity.value,
      //'city' :this.city.value, 
      'user_address':this.user_address.value,
      'phone': this.phone.value,
      //'id_category' :this.id_category.value,
      //'id_role':'5'
    }
    let id = this.usuario.id;
       
    this.usuariosCtrl.updateUser(user, id).subscribe(
      data=>{
        console.log("Ok.");
        loading.dismiss();
        this.lanzarMensaje('Actualización exitosa!');
        this.valido=true;
        this.usuario.company =data['company'];
        this.usuario.cedula =data['cedula'];
        this.usuario.phone =data['phone'];
        this.usuario.activity =data['activity'];
        this.usuario.email =data['email'];
        this.usuario.user_address =data['user_address'];

      },
      err=>{
        console.log("Err.");
        loading.dismiss();
         this.lanzarMensaje('Error al guardar!'+ err);
      }
    )
   
  }

  
  editPassword(){
    let prompt = this.alertCtrl.create({
      title: 'Nueva Contraseña',
      inputs: [
        {
          name: 'password',
          placeholder: 'nueva contraseña',
          type:'password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');

          }
        },
        {
          text: 'Save',
          handler: data => {
             let loading = this.loadingCtrl.create({
                  content: 'Por favor espere...'
              });

              loading.present();
            console.log('Saved clicked');
            console.log(data.password);
             let user ={
                  'password':data.password, 
                }
                let id = this.usuario.id;
                   
                this.usuariosCtrl.updateUser(user, id).subscribe(
                  data=>{
                    console.log("Ok.");
                    loading.dismiss();
                    this.lanzarMensaje('Actualización exitosa!');
                    this.valido=true;
                  },
                  err=>{
                    console.log("Err.");
                    loading.dismiss();
                    this.lanzarMensaje('Error al guardar!'+ err);
                  });
   
            
          }
        }
      ]
    });
    prompt.present();
  

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

