import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InterneLogistikPage } from './interne-logistik';
import { ComponentsModule } from "../../components/components.module";
import { PipesModule } from "../../pipes/pipes.module";
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [
    InterneLogistikPage,
  ],
  imports: [
    IonicPageModule.forChild(InterneLogistikPage),
	ComponentsModule,
	PipesModule,
	ZXingScannerModule.forRoot()
  ],
})
export class InterneLogistikPageModule {}
