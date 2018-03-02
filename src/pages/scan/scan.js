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
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ContactosProvider } from '../../providers/contactos/contactos';
import { ToastController } from 'ionic-angular'; //Importando Componente TOAS de IONIC
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScanPage = /** @class */ (function () {
    function ScanPage(navCtrl, navParams, barcodeScanner, loadingCtrl, contactCtrl, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.loadingCtrl = loadingCtrl;
        this.contactCtrl = contactCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.urlLogo = "http://192.168.0.106/storage";
        this.idUser = navParams.data;
    }
    ScanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ScanPage');
    };
    //Metodo que scanea el codigo qr y agrega a contactos
    ScanPage.prototype.leerQr = function () {
        var _this = this;
        var loading;
        //Configuraciones del lector QR
        this.options = {
            formats: 'QR_CODE',
            prompt: "Por favor escanea el codigo QR" + "\n" + "para agregar a tus contactos",
            buttonText: 'Loading…',
            load: true,
            resultDisplayDuration: 0
        };
        //Llamado a la lectuca del codigo qr
        this.barcodeScanner.scan(this.options).then(function (barcodeData) {
            //Si cancela la lectura se ejecuta este if
            if (barcodeData.cancelled) {
                console.log("User cancelled the action!");
                _this.buttonText = "Scan";
                _this.load = false;
                return false;
            }
            _this.scannedCode = barcodeData.text;
            loading = _this.loadingCtrl.create({
                content: 'Por favor espere...'
            });
            loading.present();
            var code = _this.scannedCode.split("♥", 3);
            _this.email = code[1];
            //consulta provider perfil
            _this.contactCtrl.leerContacto(_this.email).subscribe(function (data) {
                console.log('Status: Ok.');
                if (data['status'] == '200') {
                    console.log("Si existe usuario");
                    _this.userPerfil = data['data'];
                    _this.message = data['data']['id'];
                    _this.idContacto = data['data']['id'];
                    //this.navCtrl.setRoot(MenuPage,{'parametro':data});
                    var contactos = {
                        "contacto1": "",
                        "contacto2": ""
                    };
                    contactos['contacto1'] = _this.idUser;
                    contactos['contacto2'] = _this.idContacto;
                    //consulta providers contactos
                    _this.contactCtrl.registerContacto(contactos).subscribe(function (data) {
                        console.log(data);
                        var img = "<ion-thumbnail item-start> <img src= " + _this.urlLogo + '/' + _this.userPerfil['UrlFotoQR'] + "></ion-thumbnail>";
                        var alert = _this.alertCtrl.create({
                            title: img,
                            subTitle: "<br>" + _this.userPerfil['names'] + " " + _this.userPerfil['last_names'] + "<br>" + "Cedula: " + _this.userPerfil['cedula'] + "<br>" + "Email: " + _this.userPerfil['email'] + '<hr>' + 'Telf: ' + _this.userPerfil['phone'] + '<br>' + 'Empresa: ' + _this.userPerfil['company'] + '<br>' + 'Actividad: ' + _this.userPerfil['activity'],
                            message: '<br>' + _this.userPerfil['user_address'],
                            buttons: ['Ok']
                        });
                        alert.present();
                        _this.lanzarMensaje(data['message']);
                    }, function (err) {
                        console.log(err);
                        _this.lanzarMensaje('Error al guardar!' + err);
                    });
                }
                else {
                    console.log("No existe usuario");
                    _this.message = "usuario no registrado";
                    _this.lanzarMensaje(_this.message);
                }
                loading.dismiss();
            }, function (err) {
                console.log('Status: Err.');
                console.log(err);
                loading.dismiss();
            });
            //Consultando perfil de usuario al servidor 
            // Success! Barcode data is here
        }, function (err) {
            console.log("Err");
            loading.dismiss();
        });
    };
    ScanPage.prototype.lanzarMensaje = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'top',
            cssClass: "toast-container"
        });
        toast.present();
    };
    ScanPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-scan',
            templateUrl: 'scan.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            BarcodeScanner,
            LoadingController,
            ContactosProvider,
            ToastController,
            AlertController])
    ], ScanPage);
    return ScanPage;
}());
export { ScanPage };
//# sourceMappingURL=scan.js.map