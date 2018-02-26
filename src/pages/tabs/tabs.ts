import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExpositoresPage,
         HomePage,
         ContactosPage,
         ScanPage,
         AgendaPage,
         PerfilUsuarioPage } from '../index.pages'

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  page1: any = HomePage;
  page2: any = ContactosPage;
  page3: any = ScanPage;
  page4: any = ExpositoresPage;
  page5: any = AgendaPage;
  page6:any = PerfilUsuarioPage;

  private rootPage:any;
  usuario:any;



  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.usuario = this.navParams.get("usuario");
    //this.rootPage=ScanPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  //Metodo para abrir el perfil del usuario
  openPagePerfil(){
   console.log("perfil");
   this.navCtrl.push(PerfilUsuarioPage, {'usuario':this.usuario}  );
  }

}
