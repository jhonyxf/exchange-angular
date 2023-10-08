import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormExchangeComponent } from './components/form-exchange/form-exchange.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { MaterialModule } from './shared/module/material.module';
import { ListExchangeComponent } from './components/list-exchange/list-exchange.component';


@NgModule({
  declarations: [
    AppComponent,
    FormExchangeComponent,
    HeaderComponent,
    FooterComponent,
    ListExchangeComponent,
    FormExchangeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
