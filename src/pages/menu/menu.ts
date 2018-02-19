import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ExpositoresPage,TabsPage } from '../index.pages'

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {


  /*COSTRUCTOR*/
  /*-----------------------------------------------------------------------------*/
  constructor(public navCtrl: NavController, 
  	          public navParams: NavParams) 
  {
  }


  /*METODOS*/
  /*-----------------------------------------------------------------------------*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  //ir a page expositores
  goExpositoresPage(){
  	console.log("Page Expositores");
  	this.navCtrl.push(TabsPage);
    
  }

}
