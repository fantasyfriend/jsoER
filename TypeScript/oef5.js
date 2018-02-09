class Werknemer {
    constructor(vnaam, anaam, ssnummer, upw = 40) {
        this.vnaam = vnaam;
        this.anaam = anaam;
        this.ssnummer = ssnummer;
        this.upw = upw;
    }
}
class W1 extends Werknemer {
    constructor(vnaam, anaam, ssnummer, wloon) {
        super(vnaam, anaam, ssnummer);
        this.vnaam = vnaam;
        this.anaam = anaam;
        this.ssnummer = ssnummer;
        this.wloon = wloon;
    }
    get loon() { return this.wloon; }
}
class W2 extends Werknemer {
    constructor(vnaam, anaam, ssnummer, upw, wloon) {
        super(vnaam, anaam, ssnummer, upw);
        this.vnaam = vnaam;
        this.anaam = anaam;
        this.ssnummer = ssnummer;
        this.upw = upw;
        this.wloon = wloon;
    }
    get loon() { return this.wloon + ((this.upw - 40) * ((this.wloon / 40) * 1.5)); }
}
class Verkoper extends Werknemer {
    constructor(vnaam, anaam, ssnummer, upw, verkoop) {
        super(vnaam, anaam, ssnummer, upw);
        this.vnaam = vnaam;
        this.anaam = anaam;
        this.ssnummer = ssnummer;
        this.upw = upw;
        this.verkoop = verkoop;
    }
}
class V1 extends Verkoper {
    constructor(vnaam, anaam, ssnummer, upw, verkoop, percent) {
        super(vnaam, anaam, ssnummer, upw, verkoop);
        this.vnaam = vnaam;
        this.anaam = anaam;
        this.ssnummer = ssnummer;
        this.upw = upw;
        this.verkoop = verkoop;
        this.percent = percent;
    }
    get loon() { return (this.percent * this.verkoop) / 100; }
}
class V2 extends Verkoper {
    constructor(vnaam, anaam, ssnummer, upw, verkoop, percent, wloon) {
        super(vnaam, anaam, ssnummer, upw, verkoop);
        this.vnaam = vnaam;
        this.anaam = anaam;
        this.ssnummer = ssnummer;
        this.upw = upw;
        this.verkoop = verkoop;
        this.percent = percent;
        this.wloon = wloon;
    }
    get loon() { return this.wloon + (this.percent * this.verkoop) / 100; }
}
let werkers = new Array();
werkers.push(new W1("Jan", "Pop", 10, 1200));
werkers.push(new W2("Anne", "Kluts", 18, 45, 1250));
werkers.push(new V1("Rob", "groen", 14, 40, 16000, 5));
werkers.push(new V2("Janne", "geel", 20, 40, 18000, 4, 1200));
for (let werker of werkers) {
    console.log("Werker %s %s nummer %d verdiend %d uero per week.", werker.vnaam, werker.anaam, werker.ssnummer, werker.loon);
}
