import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

/*Components*/
import { LoginPage,
         RegistroPage,
         MenuPage,
         ExpositoresPage,
         TabsPage,
         ContactosPage,
         PerfilContactoPage,
         HomePage,
         ScanPage,
         AgendaPage,
         PerfilUsuarioPage } from '../pages/index.pages'

/*Services*/
import { ExpositoresProvider } from '../providers/expositores/expositores';


@NgModule({
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ExpositoresProvider
  ]
})
export class AppModule {}
