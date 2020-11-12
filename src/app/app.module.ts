import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {QuanlyhoclaiModule} from './quanlyhoclai/quanlyhoclai.module'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    QuanlyhoclaiModule,
    FormsModule
  ],
  providers: [],
  exports:[
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
