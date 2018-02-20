abstract class Werknemer{
    constructor(public vnaam:string,public anaam:string,public ssnummer:number,public upw:number=40){}
    abstract get loon():number;
}

class W1 extends Werknemer{
    constructor(public vnaam:string,public anaam:string,public ssnummer:number, public wloon:number){
        super(vnaam,anaam,ssnummer);}
    get loon():number{return this.wloon;}
}

class W2 extends Werknemer{
    constructor(public vnaam:string,public anaam:string,public ssnummer:number,public upw:number, public wloon:number){
        super(vnaam,anaam,ssnummer,upw);}
    get loon():number{return this.wloon+((this.upw-40)*((this.wloon/40)*1.5));}
}


abstract class Verkoper extends Werknemer{
    constructor(public vnaam:string,public anaam:string,public ssnummer:number,public upw:number,public verkoop:number){
        super(vnaam,anaam,ssnummer,upw);}
    abstract get loon():number
}

class V1 extends Verkoper{
    constructor(public vnaam:string,public anaam:string,public ssnummer:number,public upw:number,public verkoop:number,public percent:number){
        super(vnaam,anaam,ssnummer,upw,verkoop);}
    get loon():number{return (this.percent*this.verkoop)/100;}
}

class V2 extends Verkoper{
    constructor(public vnaam:string,public anaam:string,public ssnummer:number,public upw:number,public verkoop:number,public percent:number, public wloon:number){
        super(vnaam,anaam,ssnummer,upw,verkoop);}
    get loon():number{return this.wloon+(this.percent*this.verkoop)/100;}
}

let werkers: Werknemer[] = new Array<Werknemer>();
werkers.push(new W1("Jan","Pop",10,1200));
werkers.push(new W2("Anne","Kluts",18,45,1250));
werkers.push(new V1("Rob","groen",14,40,16000,5));
werkers.push(new V2("Janne","geel",20,40,18000,4,1200));
for(let werker of werkers){
    console.log("Werker %s %s nummer %d verdiend %d Euro deze week.", werker.vnaam,werker.anaam,werker.ssnummer,werker.loon);
}
