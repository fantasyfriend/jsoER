import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero-detail/hero';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  beschikbareHelden: boolean=false;
  activeNaam:string="";
  hero: Hero[] = [new Hero(1,"Superman", false),
  new Hero(2,"Batman", false),
  new Hero(3,"Vuilman", true),
  new Hero(4,"Subwoman", false)];
  
  geefNaam(naam){this.activeNaam=naam;};

  isVeel(){return this.hero.length>3?"Er zijn veel helden!":"";};

  constructor() { }

  ngOnInit() {
  }

}
