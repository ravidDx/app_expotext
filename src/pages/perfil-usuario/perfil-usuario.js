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
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
/**
 * Generated class for the PerfilUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilUsuarioPage = /** @class */ (function () {
    function PerfilUsuarioPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        // urlLogo:string="http://localhost/storage";
        //urlLogo:string="http://192.168.0.23/storage";
        this.urlLogo = "http://192.168.0.106/storage";
        this.usuario = this.navParams.get("usuario");
        console.log(this.usuario);
    }
    PerfilUsuarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilUsuarioPage');
    };
    //Funcion que presenta el QR
    PerfilUsuarioPage.prototype.presentQr = function () {
        var img = "<ion-thumbnail item-start> <img src= " + this.urlLogo + '/' + this.usuario['UrlFotoQR'] + "></ion-thumbnail>";
        var alert = this.alertCtrl.create({
            title: img
        });
        alert.present();
    };
    PerfilUsuarioPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-perfil-usuario',
            templateUrl: 'perfil-usuario.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AlertController])
    ], PerfilUsuarioPage);
    return PerfilUsuarioPage;
}());
export { PerfilUsuarioPage };
//# sourceMappingURL=perfil-usuario.js.map