import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


//import { AppComponent } from './app.component';
//import { Vb00Component } from './vb00/vb00.component';
//import { DoefComponent } from './doef/doef.component';
import { DoefnotitieComponent } from './doefnotitie/doefnotitie.component';


@NgModule({
  declarations: [
    //AppComponent,
    //Vb00Component,
    //DoefComponent,
    DoefnotitieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [DoefnotitieComponent]
})
export class AppModule { }
