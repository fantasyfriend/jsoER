import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doef',
  templateUrl: './doef.component.html',
  styleUrls: ['./doef.component.css']
})
export class DoefComponent implements OnInit {
    aantal: number;
    eenheidsprijs: number;
      
    constructor() { 
      this.aantal = 1;
      this.eenheidsprijs = 0;
    }
  
    ngOnInit() {
    }
  
    totaal(): string{
      return (this.aantal * this.eenheidsprijs).toFixed(2);
    }
  
     
}
