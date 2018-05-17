import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { LoginPage } from '../pages/login/login';
import {RegisterPage } from '../pages/register/register';
import { AngularFireModule } from 'angularfire2';
import { LoggedinPage } from '../pages/loggedin/loggedin';
import { RegistroPage } from '../pages/registro/registro';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { GastosService } from '../services/gastos.service';
import { DetailPage } from '../pages/detail/detail';







  // Initialize Firebase
  export var firebaseAuth = {
  apiKey: "AIzaSyDSSYuG6HkhCLE_Pgu9jGS1MhOoml0_oHs",
  authDomain: "moneycontrolles.firebaseapp.com",
  databaseURL: "https://moneycontrolles.firebaseio.com",
  projectId: "moneycontrolles",
  storageBucket: "moneycontrolles.appspot.com",
  messagingSenderId: "371054206185"
  };




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    RegistroPage,
    DetailPage
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseAuth),
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    RegistroPage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GastosService



  ]

})
export class AppModule {}
