import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VbPipesComponent} from './voorbeelden/vbpipes/vbpipes.component';

@NgModule({
  declarations: [
    AppComponent,
    VbPipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [VbPipesComponent]
})
export class AppModule { }
