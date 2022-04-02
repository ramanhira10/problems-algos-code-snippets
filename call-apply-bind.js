var person1 = {
    firstName: 'myFirstName1',
    lastName: 'myLastName1'
};

var person2 = {
    firstName: 'myFirstName2',
    lastName: 'myLastName2'
};


function say (greeting) {
    console.log(`${greeting} ${this.firstName} ${this.lastName}`);
}

say.call(person1, 'Hello');
say.call(person2, 'Hello');

say.apply(person1, ['Hello']);
say.apply(person2, ['Hello']);

function sayHello () {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
}

var sayHelloPerson1 = sayHello.bind(person1);
var sayHelloPerson2 = sayHello.bind(person2);

sayHelloPerson1();
sayHelloPerson2();
