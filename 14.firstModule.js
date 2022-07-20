const names=require('./14.firstModule1')
const sayHello=require('./14.firstModule2')
const {bhuvan,roxy}=require('./14.firstModule3')

// console.log(sayHello);
// console.log(value);

sayHello('Susan')
sayHello(names.john)
sayHello(names.walter)
sayHello(bhuvan)
sayHello(roxy)