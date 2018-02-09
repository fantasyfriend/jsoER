class Figuur {
    constructor(kleur, soort) {
        this.kleur = kleur;
        this.soort = soort;
    }
}
class Cirkel extends Figuur {
    constructor(kleur, straal) {
        super(kleur, 'circel');
        this.straal = straal;
    }
    get omtrek() { return Math.PI * 2 * this.straal; }
    get oppervlakte() { return Math.PI * (this.straal * this.straal); }
}
class Rechthoek extends Figuur {
    constructor(kleur, x, y) {
        super(kleur, 'rechthoek');
        this.x = x;
        this.y = y;
    }
    get omtrek() { return (this.x * 2) + (this.y * 2); }
    get oppervlakte() { return this.x * this.y; }
}
let figuren = new Array();
figuren.push(new Cirkel("rood", 10));
figuren.push(new Rechthoek("blauw", 2, 3));
figuren.push(new Rechthoek("groen", 4, 5));
figuren.push(new Cirkel("geel", 1.5));
for (let figuur of figuren) {
    console.log("een %s met eigenschappen: ", figuur.soort);
    console.log("\tkleur: %s\tomtrek: %s\toppervlakte: %s", figuur.kleur, figuur.omtrek, figuur.oppervlakte);
}
