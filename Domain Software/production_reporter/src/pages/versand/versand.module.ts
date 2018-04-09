import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VersandPage } from './versand';
import { ComponentsModule } from "../../components/components.module";
import { PipesModule } from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    VersandPage,
  ],
  imports: [
    IonicPageModule.forChild(VersandPage),
	ComponentsModule, 
	PipesModule,
  ],
})
export class VersandPageModule {}
