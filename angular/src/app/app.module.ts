import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // nodig voor ngModel (-> 2 way binding)

import { AppComponent } from './app.component';
import { Oef00Component } from './oefeningen/oef00/oef00.component';
import { OefNotitieComponent } from './oefeningen/oefnotitie/oefnotitie.component';
import { VbForuitbrComponent } from './voorbeelden/vbfor/vbforuitbr.component';
import { OefBroodjesComponent } from './oefeningen/oefbroodjes/oefbroodjes.component';
import { OefHogerLagerComponent } from './oefeningen/oefhogerlager/oefhogerlager.component';
import { OefCurrencyconvertorComponent } from './oefeningen/oefcurrencyconvertor/oefcurrencyconvertor.component';
import { CurrencyService } from './oefeningen/oefcurrencyconvertor/currency.service';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { VbDatabindingComponent } from './voorbeelden/vbdatabinding/vbdatabinding.component';
import { VbIfComponent } from './voorbeelden/vbif/vbif.component';
import { VbroutingReqparamComponent } from './voorbeelden/vbrouting/vbrouting-reqparam.component';
import { PageNotFoundComponent } from './voorbeelden/vbrouting/page-not-found.component';
import { Vbrouting0Component } from './voorbeelden/vbrouting/vbrouting0.component';
import { VbroutingComponent } from './voorbeelden/vbrouting/vbrouting.component';
import { VbRoutingModule } from './voorbeelden/vbrouting/vbrouting.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesAllComponent } from './heroes-all/heroes-all.component';
// TODO: alle componenten die in deze module gedefinieerd zijn importere
  // zie vbrouting.module.ts
  


@NgModule({
  declarations: [
    VbDatabindingComponent,
    VbIfComponent,
    OefCurrencyconvertorComponent,
    PageNotFoundComponent,
    Vbrouting0Component,
    VbroutingComponent,
    VbroutingReqparamComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroesAllComponent
    // TODO: alle componenten die in deze module gedefinieerd zijn hier importeren
  ],
  imports: [
    BrowserModule,
    FormsModule,  //  nodig om 2 way binding te kunnen doen
    HttpClientModule,
   
    VbRoutingModule
  ],
  providers: [CurrencyService],
  // TODO: in bootstrap array (enkel) alle componenten opsommen
  // die horen bij user defined tags die in index.html gebruikt worden
  bootstrap: [HeroesComponent]
})
export class AppModule { }
