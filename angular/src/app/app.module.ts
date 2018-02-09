import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VbPipesComponent} from './voorbeelden/vbpipes/vbpipes.component';
=======
import { FormsModule } from '@angular/forms';  // nodig voor ngModel (-> 2 way binding)

import { AppComponent } from './app.component';
import { Oef00Component } from './oefeningen/oef00/oef00.component';
import { OefNotitieComponent } from './oefeningen/oefnotitie/oefnotitie.component';
import { VbForuitbrComponent } from './voorbeelden/vbfor/vbforuitbr.component';
import { OefBroodjesComponent } from './oefeningen/oefbroodjes/oefbroodjes.component';
// TODO: alle componenten die in deze module gedefinieerd zijn importeren
>>>>>>> f0d382b8738d97146bb32f867a7460850cb64e60

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    VbPipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [VbPipesComponent]
=======
    Oef00Component,
    OefNotitieComponent,
    VbForuitbrComponent,
    OefBroodjesComponent,
    // TODO: alle componenten die in deze module gedefinieerd zijn hier importeren
  ],
  imports: [
    BrowserModule,
    FormsModule,  //  nodig om 2 way binding te kunnen doen
  ],
  providers: [],
  // TODO: in bootstrap array (enkel) alle componenten opsommen
  // die horen bij user defined tags die in index.html gebruikt worden
  bootstrap: [OefBroodjesComponent]
>>>>>>> f0d382b8738d97146bb32f867a7460850cb64e60
})
export class AppModule { }
