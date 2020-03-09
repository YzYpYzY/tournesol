import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavaRoutingModule } from './java-routing.module';
import { DbschemaComponent } from './dbschema/dbschema.component';


@NgModule({
  declarations: [DbschemaComponent],
  imports: [
    CommonModule,
    JavaRoutingModule
  ]
})
export class JavaModule { }
