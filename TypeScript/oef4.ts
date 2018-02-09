abstract class Figuur{
    constructor (public kleur:string,public soort:string){}
    abstract get omtrek():number;
    abstract get oppervlakte():number;
}

class Cirkel extends Figuur{
    constructor (kleur:string,public straal:number){super(kleur,'circel');}
    get omtrek():number{return Math.PI*2*this.straal;}
    get oppervlakte():number{return Math.PI*(this.straal*this.straal);}
}

class Rechthoek extends Figuur{
    constructor (kleur:string,public x:number,public y:number){super(kleur,'rechthoek');}
    get omtrek():number{return (this.x*2)+(this.y*2);}
    get oppervlakte():number{return this.x*this.y;}
}

let figuren: Figuur[] = new Array<Figuur>();
figuren.push(new Cirkel("rood", 10));
figuren.push(new Rechthoek("blauw", 2, 3));
figuren.push(new Rechthoek("groen", 4, 5));
figuren.push(new Cirkel("geel", 1.5));
for(let figuur of figuren){
    console.log("een %s met eigenschappen: ", figuur.soort);
    console.log("\tkleur: %s\tomtrek: %s\toppervlakte: %s", figuur.kleur, 
        figuur.omtrek, figuur.oppervlakte);
}

