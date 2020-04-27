import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IdeeRoutingModule } from './idee-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeeComponent } from './idee.component';
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  declarations: [IdeeComponent],
  imports: [
    CommonModule,
    IdeeRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ]
})
export class IdeeModule { }
