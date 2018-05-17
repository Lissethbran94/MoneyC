import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { RegistroPage } from '../registro/registro';
import { GastosService } from '../../services/gastos.service';
import { DetailPage } from '../detail/detail';

/**
 * Generated class for the LoggedinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loggedin',
  templateUrl: 'loggedin.html',
})
export class LoggedinPage {
  email:string;

  constructor( private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public gastosService: GastosService ) {
    this.email = fire.auth.currentUser.email;

    gastosService.getGastos()
    .valueChanges().subscribe(gastos =>  {
      this.gastos = gastos;
    });
  }

  salir() {

     this.navCtrl.push(HomePage);
   }

   nuevoR() {

      this.navCtrl.push(RegistroPage);
    }

    public createGasto(){
      this.navCtrl.push(DetailPage, {id:0});
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoggedinPage');
  }

}
