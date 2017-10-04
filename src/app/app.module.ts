import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { IMcPage } from '../pages/i-mc/i-mc';
import { DietaPage } from '../pages/dieta/dieta';
import { SobreNsPage } from '../pages/sobre-ns/sobre-ns';
import { InicioPage } from '../pages/inicio/inicio';
import { LoginPage } from '../pages/login/login';
import { SignInPage } from '../pages/sign-in/sign-in';
import { WelcomePage } from '../pages/welcome/welcome';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePageModule } from '../pages/home/home.module';
import { SignInPageModule } from '../pages/sign-in/sign-in.module';
import { LoginPageModule } from '../pages/login/login.module';
import { InicioPageModule } from '../pages/inicio/inicio.module';
import { SobreNsPageModule } from '../pages/sobre-ns/sobre-ns.module';
import { DietaPageModule } from '../pages/dieta/dieta.module';
import { IMcPageModule } from '../pages/i-mc/i-mc.module';
<<<<<<< HEAD
import { DietaCafeManhaPageModule } from '../pages/dieta-cafe-manha/dieta-cafe-manha.module';
import { DietaAlmocoPageModule } from '../pages/dieta-almoco/dieta-almoco.module';
import { DietaLanchePageModule } from '../pages/dieta-lanche/dieta-lanche.module';
import { DietaJantaPageModule } from '../pages/dieta-janta/dieta-janta.module';
import { DietaLanchePage } from '../pages/dieta-lanche/dieta-lanche';
import { DietaAlmocoPage } from '../pages/dieta-almoco/dieta-almoco';
import { DietaCafeManhaPage } from '../pages/dieta-cafe-manha/dieta-cafe-manha';
import { DietaJantaPage } from '../pages/dieta-janta/dieta-janta';
=======
>>>>>>> 40a6ba76d93952b2be90b2caf103ce2e6d0d4680

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IMcPageModule,
    DietaPageModule,
    SobreNsPageModule,
    InicioPageModule,
    LoginPageModule,
    SignInPageModule,
    HomePageModule,
    DietaCafeManhaPageModule,
    DietaAlmocoPageModule,
    DietaLanchePageModule,
    DietaJantaPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IMcPage,
    DietaPage,
    SobreNsPage,
    InicioPage,
    LoginPage,
    SignInPage,
    WelcomePage,
    HomePage,
    DietaCafeManhaPage,
    DietaAlmocoPage,
    DietaLanchePage,
    DietaJantaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
