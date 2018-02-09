export class HogerLager {
    public beurten: number=0;
    public geraden:boolean=false;
    public waarde: number=(Math.floor(Math.random()*100))+1;
    //constructor(public getal:number){}
    verwerkGok(gok:number):string{
        this.beurten++;
        if (gok==this.waarde)this.geraden=true;
        return gok==this.waarde?'Juist':gok>this.waarde?'Lager':'Hoger';
    };
    reset():void{
        this.geraden=false;
        this.beurten=0;
        this.waarde=(Math.floor(Math.random()*100))+1;
    };
}