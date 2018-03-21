import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InterneLogistikPage } from '../pages/interne-logistik/interne-logistik';
import { InventarPage } from '../pages/inventar/inventar';
import { VersandPage } from '../pages/versand/versand';
import { WareneingangPage } from '../pages/wareneingang/wareneingang';

@Component({
  templateUrl: 'app.html'
})
export class ScaleITDomainApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage:any = InterneLogistikPage;
  pages: Array<{title: string, component: any}>;

  constructor(
	platform: Platform, 
	statusBar: StatusBar, 
	splashScreen: SplashScreen,
  ){
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
	
	this.pages = [
      { title: 'Interne Logistik', component: InterneLogistikPage },
      { title: 'Inventar', component: InventarPage },
	  { title: 'Versand', component: VersandPage },
	  { title: 'Wareneingang', component: WareneingangPage }
    ];
  }
  
  openPage(page) {
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
  
}

