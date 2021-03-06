var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { IonicStorageModule } from '@ionic/storage';
import { Calendar } from '@ionic-native/calendar';
import { CalendarModule } from "ion2-calendar";
import { MyApp } from './app.component';
/*Components*/
import { LoginPage, RegistroPage, MenuPage, ExpositoresPage, TabsPage, ContactosPage, PerfilContactoPage, HomePage, ScanPage, AgendaPage, PerfilUsuarioPage } from '../pages/index.pages';
/*Services*/
import { ExpositoresProvider } from '../providers/expositores/expositores';
import { UsuariosProvider } from '../providers/usuarios/usuarios';
import { ContactosProvider } from '../providers/contactos/contactos';
import { EventosProvider } from '../providers/eventos/eventos';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                //HomePage,
                LoginPage,
                RegistroPage,
                MenuPage,
                ExpositoresPage,
                TabsPage,
                ContactosPage,
                PerfilContactoPage,
                HomePage,
                ScanPage,
                AgendaPage,
                PerfilUsuarioPage
            ],
            imports: [
                BrowserModule,
                HttpClientModule,
                HttpModule,
                FormsModule,
                CustomFormsModule,
                CalendarModule,
                IonicModule.forRoot(MyApp),
                IonicStorageModule.forRoot()
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                //HomePage,
                LoginPage,
                RegistroPage,
                MenuPage,
                ExpositoresPage,
                TabsPage,
                ContactosPage,
                PerfilContactoPage,
                HomePage,
                ScanPage,
                AgendaPage,
                PerfilUsuarioPage
            ],
            providers: [
                StatusBar,
                SplashScreen,
                DocumentViewer,
                BarcodeScanner,
                Calendar,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                ExpositoresProvider,
                UsuariosProvider,
                ContactosProvider,
                EventosProvider
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map