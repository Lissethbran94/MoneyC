import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GastosService } from '../../services/gastos.service';
import { DetailPage } from '../detail/detail';



/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
   gastos = [];

  @ViewChild('myNav')nav: NavController;
  constructor(public navCtrl: NavController, public navParams: NavParams, public gastosService: GastosService) {
    gastosService.getGastos()
    .valueChanges().subscribe(gastos =>  {
      this.gastos = gastos;
    });
  }

public goToDetail(id){
  this.navCtrl.push(DetailPage, {id:id});
}

public createGasto(){
  this.navCtrl.push(DetailPage, {id:0});
}



  }
