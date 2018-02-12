import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'herodetail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  
  hero: Hero[] = [new Hero(1,"Superman", false),
  new Hero(2,"Batman", false),
  new Hero(3,"Vuilman", true),
  new Hero(4,"Subwoman", false)];
  gekozenHero: Hero = this.hero[0];
  
  
  

  constructor() { }

  ngOnInit() {
  }

}
