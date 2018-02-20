import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doefnotitie',
  templateUrl: './doefnotitie.component.html',
  styleUrls: ['./doefnotitie.component.css']
})
export class DoefnotitieComponent implements OnInit {

  invoer: string;
     
  constructor() { 
    this.invoer = "";
  }

  ngOnInit() {
  }

  bewaar(){
    if(this.invoer!="")alert('Uw tekst ( '+this.invoer+' ) is opgeslagen!');
  }

  wis(){
    if(this.invoer!="")this.invoer="";
    
  }

  totaal():number{
    return 100-(this.invoer.length);
  }

}
