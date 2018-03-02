var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { RegistroPage, TabsPage } from '../index.pages';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    /*COSTRUCTOR*/
    /*-----------------------------------------------------------------------------*/
    function LoginPage(navCtrl, navParams, document, fb, loadingCtrl, usuariosCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.document = document;
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.usuariosCtrl = usuariosCtrl;
        this.errorMessage = null;
        this.hidden = true;
        //const options: DocumentViewerOptions = {title: 'My PDF'}
        //this.err=this.document.viewDocument('assets/pdf/cuento.pdf', 'application/pdf', options);
        //console.log(this.err.error);
        console.log("Contructor");
        this.loginForm = fb.group({
            'email': ['', Validators.compose([Validators.required, Validators.email])],
            'password': ['', Validators.compose([Validators.required])],
        });
        this.email = this.loginForm.controls['email'];
        this.password = this.loginForm.controls['password'];
    }
    /*METODOS*/
    /*-----------------------------------------------------------------------------*/
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    //ir a page registro
    LoginPage.prototype.goRegisterPage = function () {
        console.log('Registro de usuario');
        this.navCtrl.push(RegistroPage);
    };
    //Funcion Login
    LoginPage.prototype.login = function () {
        var _this = this;
        console.log('Login');
        this.errorMessage = "";
        var loading = this.loadingCtrl.create({
            content: 'Por favor espere...'
        });
        loading.present();
        this.usuariosCtrl.loginUser(this.email.value, this.password.value).subscribe(function (data) {
            console.log('Status: Ok.');
            if (data['status'] == '200') {
                console.log("Si existe usuario");
                //this.navCtrl.setRoot(MenuPage,{'parametro':data});
                _this.navCtrl.setRoot(TabsPage, { 'usuario': data['data'] });
            }
            else {
                console.log("Credenciales invalidas");
                _this.errorMessage = data['message'];
            }
            loading.dismiss();
        }, function (err) {
            console.log('Status: Err.');
            console.log(err);
            _this.error = err;
            loading.dismiss();
        });
        //this.navCtrl.push(ExpositoresPage);
        // var jsonLogin ={
        //   "email":this.email.value,
        //   "pass":this.password.value
        // };
        // localStorage.setItem("loginJson", JSON.stringify(jsonLogin));
        // var datos = JSON.parse(localStorage.getItem("loginJson"));
        // this.valor = datos.email +" "+datos.pass;
        // this.navCtrl.setRoot(TabsPage);
    };
    LoginPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-login',
            templateUrl: 'login.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            DocumentViewer,
            FormBuilder,
            LoadingController,
            UsuariosProvider])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map