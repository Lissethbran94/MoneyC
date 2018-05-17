import { Injectable } from '@angular/core';
import { AngularFireDatabase} from "angularfire2/database/database";

@Injectable()
export class GastosService{

  constructor(public afDB:AngularFireDatabase){

  }

  gastos = [];
  public getGastos(){
    //return this.gastos;
    return this.afDB.list('gastos/');
  }
    public getGasto(id){
      //return this.gastos.filter(function(e, i){ return e.id == id}) [0] || {id: null, TipoDeGasto: null, Description: null, Valor: null, Fecha: null, Hora: null};
      return this.afDB.object('gastos/'+id);
    }

   public createGasto(gasto){
     //this.gastos.push(gasto);
     this.afDB.database.ref('gastos/'+gasto.id).set(gasto);
   }

   public editGasto(gasto){
       /*for (let i = 0; i < this.gastos.length; i++){
            if (this.gastos [i].id == gasto.id){
              this.gastos[i] = gasto;
            }

       }*/
       this.afDB.database.ref('gastos/'+gasto.id).set(gasto);
   }

   public deleteGasto(gasto){
     this.afDB.database.ref('gastos/'+gasto.id).remove();
     /*for (let i = 0; i < this.gastos.length; i++){
          if (this.gastos [i].id == gasto.id){
            this.gastos.splice(i, 1);
          }

     }*/

   }
}
