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
import { AlertController } from 'ionic-angular';
//Servicio
import { ExpositoresProvider } from '../../providers/expositores/expositores';
/**
 * Generated class for the ExpositoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExpositoresPage = /** @class */ (function () {
    /*CONSTRUCTOR*/
    /*--------------------------------------------------------*/
    function ExpositoresPage(navCtrl, navParams, expositorCtrl, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.expositorCtrl = expositorCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.searchQuery = '';
        //urlLogo:string="http://127.0.0.1:8000/storage";
        //urlLogo:string="http://localhost/storage";
        //urlLogo:string="http://192.168.0.23/storage";
        this.urlLogo = "http://192.168.0.106/storage";
    }
    /*METODOS*/
    /*--------------------------------------------------------*/
    // Se llama únicamente cuando cargas una página en memoria (push).
    ExpositoresPage.prototype.ionViewDidLoad = function () {
    };
    //Se ejecuta cuando entras en una página, antes de cargarla. 
    ExpositoresPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter ExpositoresPage');
        var loading = this.loadingCtrl.create({
            content: 'Por favor espere...'
        });
        loading.present();
        //Consulta de las empresas en el Servidor
        this.expositorCtrl.getAllEmpresas().subscribe(function (data) {
            console.log("status: ok");
            _this.empresasList = data;
            _this.backupEmpresasList = data;
            console.log(_this.empresasList);
            loading.dismiss();
        }, function (err) {
            console.log("status: error");
            console.log(err);
            loading.dismiss();
        });
    };
    //Funcion que presenta informacion de la empresa
    ExpositoresPage.prototype.presentInform = function (id) {
        var empresa = this.empresasList[id];
        var img = "<ion-thumbnail item-start> <img src= " + this.urlLogo + '/' + empresa['logo'] + "></ion-thumbnail>";
        var alert = this.alertCtrl.create({
            title: img,
            subTitle: "<br>" + empresa['name'] + "<br>" + "Categoria:" + empresa['category'] + "<br>" + "# Stand:" + empresa['num_Stand'] + '<hr>' + 'Telf. ' + empresa['phone'] + '<br>' + 'Email. ' + empresa['email'] + '<br>' + 'Web. ' + empresa['web_link'],
            message: '<br>' + empresa['description'],
            buttons: ['Ok']
        });
        alert.present();
    };
    //Metodo para inicializar el arreglo contactosList
    ExpositoresPage.prototype.initializeIContactosList = function () {
        this.empresasList = this.backupEmpresasList;
    };
    //Metodo de busqueda
    ExpositoresPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeIContactosList();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.empresasList = this.empresasList.filter(function (empresa) {
                return (empresa.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ExpositoresPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-expositores',
            templateUrl: 'expositores.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ExpositoresProvider,
            AlertController,
            LoadingController])
    ], ExpositoresPage);
    return ExpositoresPage;
}());
export { ExpositoresPage };
//# sourceMappingURL=expositores.js.map