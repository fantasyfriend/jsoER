class Lint {
    constructor(_kleur, _lengte) {
        this._kleur = _kleur;
        this._lengte = _lengte;
    }
    verkorten(lengteAf, aantal = 1) { this._lengte -= lengteAf * aantal; }
    get kleur() { return this._kleur; }
    get lengte() { return this._lengte; }
    stukken(lengteStuk = 1) { return Math.floor(this._lengte / lengteStuk); }
}
let lintje = new Lint("rood", 500);
console.log('lint kleur= %s en lengte= %d', lintje.kleur, lintje.lengte);
lintje.verkorten(20, 2);
console.log('lint kleur= %s en lengte= %d', lintje.kleur, lintje.lengte);
let aantalstukken = 3;
console.log('lint kleur= %s en lengte= %d krijgt stukken van %d als je het in %d stukken deelt.', lintje.kleur, lintje.lengte, lintje.stukken(3), aantalstukken);
