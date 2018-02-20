class Suikerspiegel {
    constructor(_dag, _maand, _jaar) {
        this._suikerwaarden = new Array(4);
        this.datum = new Date(_jaar, _maand - 1, _dag);
    }
    get suikerwaarden() { return this._suikerwaarden; }
    hypoWaarde(indexNr) { return this._suikerwaarden[indexNr] < Suikerspiegel.hypo; }
    hyperWaarde(indexNr) { return this._suikerwaarden[indexNr] > Suikerspiegel.hyper; }
    noteer(metingNr, waarde) { this._suikerwaarden[metingNr] = waarde; }
    get aantalHypo() {
        let x = 0;
        for (let i = 0; i < this._suikerwaarden.length; i++) {
            if (this._suikerwaarden[i] < Suikerspiegel.hypo)
                x++;
        }
        ;
        return x;
    }
    get aantalHyper() {
        let x = 0;
        for (let i = 0; i < this._suikerwaarden.length; i++) {
            if (this._suikerwaarden[i] > Suikerspiegel.hyper)
                x++;
        }
        ;
        return x;
    }
}
Suikerspiegel.hypo = 60;
Suikerspiegel.hyper = 250;
let meting1 = new Suikerspiegel(5, 2, 2018);
meting1.noteer(1, 80);
meting1.noteer(2, 280);
console.log(meting1.datum);
console.log(meting1.suikerwaarden);
console.log(meting1.hyperWaarde(1));
console.log(meting1.hyperWaarde(2));
console.log(meting1.aantalHypo);
console.log(meting1.aantalHyper);
