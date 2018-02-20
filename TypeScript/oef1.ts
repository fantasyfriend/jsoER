class Lint {
    constructor(private _kleur: string, private _lengte: number) {}

    verkorten(lengteAf:number=0,aantal:number=1){if((lengteAf>0)&&(aantal>1))this._lengte-=lengteAf*aantal;}
    
    get kleur(): string{return this._kleur;}

    get lengte(): number{return this._lengte;}

    stukken(lengteStuk:number=1): number{return Math.floor(this._lengte/lengteStuk);}
    
}

let lintje = new Lint("rood", 500);
console.log('lint kleur= %s en lengte= %d',lintje.kleur,lintje.lengte);
lintje.verkorten(20,2);
console.log('lint kleur= %s en lengte= %d',lintje.kleur,lintje.lengte);
let aantalstukken:number=3;
console.log('lint kleur= %s en lengte= %d krijgt stukken van %d als je het in %d stukken deelt.',lintje.kleur,lintje.lengte,lintje.stukken(3),aantalstukken);