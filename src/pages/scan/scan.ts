import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {

  constructor(public navCtrl: NavController, 
  	          public navParams: NavParams,
  	          private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanPage');
  }

  leerQr(){
      this.barcodeScanner.scan().then((barcodeData) => {
		 console.log("Success");
		 // Success! Barcode data is here
		}, (err) => {
		    console.log("Err");
		    
		});
  }



}
