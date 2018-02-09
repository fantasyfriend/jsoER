import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vbfor',
  templateUrl: './vbfor.component.html',
  styleUrls: ['./vbfor.component.css']
})
export class VbForComponent implements OnInit {
  piraten = ["Jan", "Piet", "Joris", "Korneel"];
  naam: string;
  constructor() {this.naam=''; }

  ngOnInit() {
  }
  toevoegen(){
    this.piraten.push(this.naam);this.naam='';
  }
}
