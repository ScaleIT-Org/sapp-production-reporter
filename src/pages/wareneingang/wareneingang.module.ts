import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WareneingangPage } from './wareneingang';
import { ComponentsModule } from "../../components/components.module";
import { PipesModule } from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    WareneingangPage,
  ],
  imports: [
    IonicPageModule.forChild(WareneingangPage),
	ComponentsModule, 
	PipesModule
  ],
})
export class WareneingangPageModule {}
