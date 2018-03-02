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
import { FormBuilder, Validators } from '@angular/forms';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { ToastController } from 'ionic-angular'; //Importando Componente TOAS de IONIC
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistroPage = /** @class */ (function () {
    function RegistroPage(navCtrl, navParams, fb, usuariosCtrl, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.usuariosCtrl = usuariosCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.page = true;
        this.text = "Paso 1 de 2";
        this.errorMessage = null;
        this.hidden = true;
        this.registroForm = fb.group({
            'names': ['', Validators.compose([Validators.required, Validators.maxLength(15)])],
            'last_names': ['', Validators.compose([Validators.required, Validators.maxLength(15)])],
            'cedula': ['', Validators.compose([Validators.required, Validators.maxLength(15)])],
            'email': ['', Validators.compose([Validators.required, Validators.email])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)])],
            're_password': ['', Validators.compose([Validators.required, this.equalto('password')])],
            'birth': ['', Validators.compose([Validators.required])],
            'company': ['', Validators.compose([Validators.required, Validators.maxLength(25)])],
            'activity': ['', Validators.compose([Validators.required, Validators.maxLength(40)])],
            'city': ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
            'user_address': ['', Validators.compose([Validators.required, Validators.maxLength(40)])],
            'phone': ['', Validators.compose([Validators.required, Validators.maxLength(15)])],
            'id_category': ['', Validators.compose([Validators.required])],
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
    RegistroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistroPage');
    };
    //Ir a Page 2 de Registro
    RegistroPage.prototype.irRegistroPage2 = function () {
        if (this.page == true) {
            console.log("Registro Page 2");
            this.page = false;
            this.text = "Paso 2 de 2";
        }
    };
    //Ir a Page 1 de Registro
    RegistroPage.prototype.irRegistroPage1 = function () {
        if (this.page == false) {
            console.log("Registro Page 1");
            this.page = true;
            this.text = "Paso 1 de 2";
        }
        else {
            this.navCtrl.pop();
        }
    };
    //Guardando usuario en el servidor
    RegistroPage.prototype.guardarUsuario = function () {
        var _this = this;
        console.log("Guardar Usuario");
        var loading = this.loadingCtrl.create({
            content: 'Por favor espere...'
        });
        loading.present();
        var user = {
            'names': this.names.value,
            'last_names': this.last_names.value,
            'cedula': this.cedula.value,
            'birth': this.birth.value,
            'email': this.email.value,
            'password': this.password.value,
            'company': this.company.value,
            'activity': this.activity.value,
            'city': this.city.value,
            'user_address': this.user_address.value,
            'phone': this.phone.value,
            'id_category': this.id_category.value,
            'id_role': '5'
        };
        console.log(user);
        this.usuariosCtrl.registerUser(user).subscribe(function (res) {
            console.log("OK.");
            console.log(res);
            _this.registroForm.reset();
            loading.dismiss();
            _this.lanzarMensaje('Registro exitoso!');
            _this.navCtrl.pop();
        }, function (err) {
            console.log("Error");
            console.log(err);
            loading.dismiss();
            _this.lanzarMensaje('Error al guardar!' + err);
        });
    };
    //Para verificar si las contraseñas son iguales
    RegistroPage.prototype.equalto = function (field_name) {
        return function (control) {
            var input = control.value;
            var isValid = control.root.value[field_name] == input;
            if (!isValid)
                return { 'equalTo': { isValid: isValid } };
            else
                return null;
        };
    };
    RegistroPage.prototype.lanzarMensaje = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    RegistroPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-registro',
            templateUrl: 'registro.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            FormBuilder,
            UsuariosProvider,
            ToastController,
            LoadingController])
    ], RegistroPage);
    return RegistroPage;
}());
export { RegistroPage };
//# sourceMappingURL=registro.js.map