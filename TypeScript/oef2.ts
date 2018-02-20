class Suikerspiegel {
    static hypo: number = 60;
    static hyper: number = 250;
    datum: Date;
    private _suikerwaarden: Array<number> = new Array<number>(4);
    constructor(_dag: number, _maand: number, _jaar: number) {
        this.datum = new Date(_jaar, _maand-1, _dag);
    }
    get suikerwaarden(): Array<number>{return this._suikerwaarden}

    hypoWaarde(indexNr):boolean{return this._suikerwaarden[indexNr]<Suikerspiegel.hypo;}

    hyperWaarde(indexNr):boolean{return this._suikerwaarden[indexNr]>Suikerspiegel.hyper;}

    noteer(metingNr:number,waarde:number):void{this._suikerwaarden[metingNr]=waarde;}

    get aantalHypo():number{let x=0;
        for(let i=0;i<this._suikerwaarden.length;i++){if(this._suikerwaarden[i]<Suikerspiegel.hypo)x++};
        return x;}
    
    get aantalHyper():number{let x=0;
        for(let i=0;i<this._suikerwaarden.length;i++){if(this._suikerwaarden[i]>Suikerspiegel.hyper)x++};
        return x;}
}

let meting2= new Suikerspiegel(5,2,2018);

meting2.noteer(1,80);
meting2.noteer(2,280);
console.log(meting2.datum);
console.log(meting2.suikerwaarden);
console.log(meting2.hyperWaarde(1));
console.log(meting2.hyperWaarde(2));
console.log(meting2.aantalHypo);
console.log(meting2.aantalHyper);