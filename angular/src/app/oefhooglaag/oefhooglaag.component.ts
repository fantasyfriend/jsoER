import { Component, OnInit } from '@angular/core';
import { HogerLager } from './hogerlager';

@Component({
  selector: 'oefhooglaag',
  templateUrl: './oefhooglaag.component.html',
  styleUrls: ['./oefhooglaag.component.css']
})
export class OefhooglaagComponent implements OnInit {
  gok:HogerLager = new HogerLager();
  resultaat:string="";
  getal:number=0;
  

  ngOnInit() {
  }
  check():void{
    this.resultaat=this.gok.verwerkGok(this.getal);

  }
  nieuw():void{this.gok.reset();this.resultaat="";this.getal=0;};
}
