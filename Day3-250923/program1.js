let obj1={name: "Person 1", age: 5};
let obj2={ age: 5,name: "Person 1"};


const _ = require('lodash');

//compares the objects without considering the order
console.log( _.isEqual(obj1, obj2))
//compares the objects considering the order
console.log(JSON.stringify(obj1)===JSON.stringify(obj2))