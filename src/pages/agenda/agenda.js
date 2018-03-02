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
import { Calendar } from '@ionic-native/calendar';
import { AlertController } from 'ionic-angular';
//import { CalendarComponentOptions } from 'ion2-calendar'
//Servicio
import { EventosProvider } from '../../providers/eventos/eventos';
/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgendaPage = /** @class */ (function () {
    function AgendaPage(navCtrl, navParams, calendar, eventosCtrl, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.calendar = calendar;
        this.eventosCtrl = eventosCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    AgendaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad AgendaPage');
        /*
        let loading = this.loadingCtrl.create({
            content: 'Por favor espere...'
        });
    
        loading.present();
        */
        //Consulta de las empresas en el Servidor
        this.eventosCtrl.getAllEventos(16).subscribe(function (data) {
            console.log("status: ok");
            _this.eventosList = data;
            console.log(_this.eventosList);
            //  loading.dismiss();
        }, function (err) {
            console.log("status: error");
            console.log(err);
            // loading.dismiss();
        });
    };
    //Se ejecuta cuando entras en una página, antes de cargarla. 
    AgendaPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter ExpositoresPage');
    };
    AgendaPage.prototype.onEventos = function (env) {
        if ()
            ;
    };
    AgendaPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-agenda',
            templateUrl: 'agenda.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            Calendar,
            EventosProvider,
            AlertController,
            LoadingController])
    ], AgendaPage);
    return AgendaPage;
}());
export { AgendaPage };
//# sourceMappingURL=agenda.js.map