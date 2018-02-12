import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // nodig voor ngModel (-> 2 way binding)

import { AppComponent } from './app.component';
import {VbDatabindingComponent} from './voorbeelden/vbdatabinding/vbdatabinding.component';
import { Oef00Component } from './oefeningen/oef00/oef00.component';
import { OefNotitieComponent } from './oefeningen/oefnotitie/oefnotitie.component';
import { VbForuitbrComponent } from './voorbeelden/vbfor/vbforuitbr.component';
import { OefBroodjesComponent } from './oefeningen/oefbroodjes/oefbroodjes.component';
import { OefhooglaagComponent } from './oefhooglaag/oefhooglaag.component';
import { HttpClientModule } from '@angular/common/http';
import { VbHttpComponent } from './voorbeelden/vbhttp/vbhttp.component';
import { VbServiceComponent03 } from './voorbeelden/vbservice/vbservice03.component';
import { VbScholenService03 } from './voorbeelden/vbservice/vbservice03';
import { CurrencyComponent } from './currency/currency.component';
import { GeldService } from './currency/currency';

// TODO: alle componenten die in deze module gedefinieerd zijn importeren

@NgModule({
  declarations: [
    AppComponent,
    VbDatabindingComponent,
    Oef00Component,
    OefNotitieComponent,
    VbForuitbrComponent,
    OefBroodjesComponent,
    OefhooglaagComponent,
    VbHttpComponent,
    VbServiceComponent03,
    CurrencyComponent
    // TODO: alle componenten die in deze module gedefinieerd zijn hier importeren
  ],
  imports: [
    BrowserModule,
    FormsModule,  //  nodig om 2 way binding te kunnen doen
    HttpClientModule,
  ],
  providers: [GeldService],
  // TODO: in bootstrap array (enkel) alle componenten opsommen
  // die horen bij user defined tags die in index.html gebruikt worden
  bootstrap: [CurrencyComponent]
})
export class AppModule { }
