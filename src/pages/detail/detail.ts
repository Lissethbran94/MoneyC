import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import { GastosService} from '../../services/gastos.service';



/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  gasto = {id: null, TipoDeGasto: null, Description: null, Valor: null, Fecha: null, Hora: null};
   id = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,private afAuth: AngularFireAuth, public gastosService: GastosService ) {
  this.id = navParams.get('id');
  if(this.id != 0){
    gastosService.getGasto(this.id)
    .valueChanges().subscribe(gasto => {
      this.gasto= gasto;
    });
      }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  addGasto(){
    if(this.id != 0){
      this.gastosService.editGasto(this.gasto);
      alert('Gasto editado con éxito!');

       }else{
      this.gasto.id =Date.now();
      this.gastosService.createGasto(this.gasto);
      alert('Gasto agregado con éxito!');



        }
         this.navCtrl.pop();

    }
    deleteGasto(){
      this.gastosService.deleteGasto(this.gasto);
      alert('Gasto Eliminado con éxito!');
      this.navCtrl.pop();

    }

  /** getUser(){
       return this.afAuth.auth.currentUser.uid;
    }
*/
}
