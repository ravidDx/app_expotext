import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DocumentViewer } from '@ionic-native/document-viewer';

import { MyApp } from './app.component';
/*import { HomePage } from '../pages/home/home';*/
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
    IonicModule.forRoot(MyApp)
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
