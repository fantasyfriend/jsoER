import { Component, OnInit } from '@angular/core';
import { GeldService } from './currency';


@Component({
  selector: 'currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
 
  geld: any;
  g: any;
  titel: string="Currency converter";
  in: number=1;
  uit: number=1;
  curIn: string="EUR";
  curUit: string="EUR";

  constructor(private geldService: GeldService) { }

  ngOnInit() {
    
    this.geldService.getGeld().subscribe(
      data => {
        
        this.geld = Object.keys(data["rates"]);
        console.dir(this.geld);
      
      });
  }
  verwerk(){
    this.geldService.getWissel(this.curIn,this.curUit).subscribe(
      data => {
        
        this.g = Object.values(data["rates"]);
        console.dir(this.g);
        this.uit=parseFloat((this.curIn==this.curUit?this.in:(this.g*this.in)).toFixed(2));
              
      });
  }
}