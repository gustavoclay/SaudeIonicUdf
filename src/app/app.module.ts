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
import { TabsPage } from '../pages/tabs/tabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePageModule } from '../pages/home/home.module';
import { WelcomePageModule } from '../pages/welcome/welcome.module';
import { SignInPageModule } from '../pages/sign-in/sign-in.module';
import { LoginPageModule } from '../pages/login/login.module';
import { InicioPageModule } from '../pages/inicio/inicio.module';
import { SobreNsPageModule } from '../pages/sobre-ns/sobre-ns.module';
import { DietaPageModule } from '../pages/dieta/dieta.module';
import { IMcPageModule } from '../pages/i-mc/i-mc.module';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
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
    WelcomePageModule,
    HomePageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    IMcPage,
    DietaPage,
    SobreNsPage,
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
