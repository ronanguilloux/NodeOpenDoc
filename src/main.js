console.log('main src file loaded');

var a = new Content(); // this returns false : Content() call always needs args;
a.load();
console.log('a is a ' + a.state + ' ' + a.type); // will not throw anything

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