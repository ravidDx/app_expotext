import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerfilUsuarioPage } from '../index.pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  
  /*Variables*/
  /*---------------------------------------------------------*/

    //Arreglo de imganes de portadas-pasarelas
	imgsSlider=[
	    {
	      id:"1",
	      name:"portada-xpotex",
	      img:"../../assets/imgs/slider/1-portada-xpotex.jpg"
	    },
	    {
	      id:"2",
	      name:"pasarela-xpotex",
	      img:"../../assets/imgs/slider/2-pasarela-xpotex.jpg"
	    },
	    {
	      id:"3",
	      name:"noche-xpotex",
	      img:"../../assets/imgs/slider/3-noche-xpotex.jpg"
	    },
	    {
	      id:"4",
	      name:"conferencias-xpotex",
	      img:"../../assets/imgs/slider/4-conferencias-xpotex.jpg"
	    },
	    {
	      id:"5",
	      name:"networking-xpotex",
	      img:"../../assets/imgs/slider/5-networking-xpotex.jpg"
	    },
	    {
	      id:"6",
	      name:"competencia-xpotex",
	      img:"../../assets/imgs/slider/6-nueva-competencia-xpotex.jpg"
	    }
	]

	//Arreglo de imagenes de logos y auspiciantes
	imgsAuspiciantes=[
	    {
	      id:"1",
	      name:"logo-capeipi-textil-xpotex",
	      img:"../../assets/imgs/logos/1.logo-capeipi-textil-xpotex.png"
	    },
	    {
	      id:"2",
	      name:"logo-capeipi-xpotex",
	      img:"../../assets/imgs/logos/2.logo-capeipi-xpotex.png"
	    },
	    {
	      id:"3",
	      name:"logo-ceq-xpotex",
	      img:"../../assets/imgs/logos/3.logo-ceq-xpotex.png"
	    },
	    {
	      id:"4",
	      name:"logo-gadpp-xpotex",
	      img:"../../assets/imgs/logos/4.logo-gadpp-xpotex.png"
	    },
	    {
	      id:"5",
	      name:"logo-ministerio-inductrias-productividad-xpotex",
	      img:"../../assets/imgs/logos/5.logo-ministerio-inductrias-productividad-xpotex.png"
	    }
	]

  /*Constructor*/
  /*---------------------------------------------------------*/
  constructor(public navCtrl: NavController) {

  }

  /*Metodos*/
  /*---------------------------------------------------------*/
  goPerfilUsuarioPage(){
  	console.log("Ir a pagina Perfil Usuario");
  	this.navCtrl.push(PerfilUsuarioPage);
  }  



}
