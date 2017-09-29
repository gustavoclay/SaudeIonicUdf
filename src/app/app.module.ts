import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IMCPage } from '../pages/i-mc/i-mc';
import { DietaPage } from '../pages/dieta/dieta';
import { SobreNSPage } from '../pages/sobre-ns/sobre-ns';
import { InicioPage } from '../pages/inicio/inicio';
import { LoginPage } from '../pages/login/login';
import { SignInPage } from '../pages/sign-in/sign-in';
import { WelcomePage } from '../pages/welcome/welcome';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    IMCPage,
    DietaPage,
    SobreNSPage,
    InicioPage,
    LoginPage,
    SignInPage,
    WelcomePage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IMCPage,
    DietaPage,
    SobreNSPage,
    InicioPage,
    LoginPage,
    SignInPage,
    WelcomePage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}