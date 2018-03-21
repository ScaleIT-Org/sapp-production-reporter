import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InventarPage } from './inventar';
import { ComponentsModule } from "../../components/components.module";
import { PipesModule } from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    InventarPage,
  ],
  imports: [
    IonicPageModule.forChild(InventarPage),
	ComponentsModule, 
	PipesModule
  ],
})
export class InventarPageModule {}
