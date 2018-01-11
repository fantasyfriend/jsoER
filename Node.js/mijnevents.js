'use strict'

var events=require('events');
var eventsEmitter=new events.EventEmitter();

// event afvuren (=signaleren dat iets gebeurd is)
eventsEmitter.emit('brand');
// vermits er nog geen eventhandler aan gekoppeld is gebeurd er niets

//event afhandelen
eventsEmitter.on('brand', function(){
    console.log('bel de brandweer');
});

eventsEmitter.emit('brand');

eventsEmitter.on('brand', function(){
    console.log('sluit de ramen');
});

eventsEmitter.emit('brand');

console.log('lang leve de muizen');
eventsEmitter.emit('muis');// geen output
eventsEmitter.on('muis', alsMuis);
eventsEmitter.emit('muis');// output

function alsMuis(){
    console.log('spring op de tafel');
}
