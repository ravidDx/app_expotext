import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
         PerfilUsuarioPage } from '../pages/index.pages';
/*import { LoginPage } from '../pages/login/login';*/

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  login:any = LoginPage;
  registro:any = RegistroPage;
  menu:any = MenuPage;
  expositores:any = ExpositoresPage;
  tabs:any = TabsPage;
  contactos:any = ContactosPage;
  perfilContacto:any = PerfilContactoPage;
  scan:any = ScanPage;
  home:any = HomePage;
  perfilUsuario:any = PerfilUsuarioPage;
  agenda:any = AgendaPage;
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  irPagina(pagina:any){
    this.rootPage=pagina;  
  }
}

