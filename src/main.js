console.log('main src file loaded');

var a = new Content();
a.load();
console.log('a is a ' + a.state + ' ' + a.type);

var globalContext = new Context({});
globalContext.load({});

var b = new Content({'context':globalContext});
b.load();
console.log('b is a ' + b.state + ' ' + b.type);

var prodContext = new Context({'type':'prod'});
prodContext.load({});

var c = new Content({'context':prodContext});
c.load();
console.log('c is a ' + c.state + ' ' + c.type);