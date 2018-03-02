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
import { PerfilContactoPage } from '../index.pages';
//Servicio
import { ContactosProvider } from '../../providers/contactos/contactos';
/**
 * Generated class for the ContactosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactosPage = /** @class */ (function () {
    function ContactosPage(navCtrl, navParams, loadingCtrl, contactCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.contactCtrl = contactCtrl;
        this.searchQuery = '';
        this.idUser = navParams.data;
        console.log("idUser: " + this.idUser);
    }
    ContactosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactosPage');
    };
    //ir a page perfil contacto
    ContactosPage.prototype.goPerfilContactoPage = function () {
        console.log('Ir a Pagina Pefil Contacto');
        this.navCtrl.push(PerfilContactoPage);
    };
    //Se ejecuta cuando entras en una página, antes de cargarla. 
    ContactosPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter ExpositoresPage');
        var loading = this.loadingCtrl.create({
            content: 'Por favor espere...'
        });
        loading.present();
        //Consulta de las empresas en el Servidor
        this.contactCtrl.allContactos(this.idUser).subscribe(function (data) {
            console.log("status: ok");
            _this.contactosList = data;
            _this.backupContactosList = data;
            loading.dismiss();
        }, function (err) {
            console.log("status: error");
            console.log(err);
            loading.dismiss();
        });
    };
    //Metodo para inicializar el arreglo contactosList
    ContactosPage.prototype.initializeIContactosList = function () {
        this.contactosList = this.backupContactosList;
    };
    //Metodo de busqueda
    ContactosPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeIContactosList();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.contactosList = this.contactosList.filter(function (contacto) {
                return (contacto.names.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ContactosPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-contactos',
            templateUrl: 'contactos.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            LoadingController,
            ContactosProvider])
    ], ContactosPage);
    return ContactosPage;
}());
export { ContactosPage };
//# sourceMappingURL=contactos.js.map