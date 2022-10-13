const Person = function (name, age) {
    this.name = name;
    this.age = age;
    this.getName = function () {
        console.log ("name is: " + this.name);
    };
};

const micky = new Person("Micky", 38);
console.log("micky", micky);

micky.getName();
console.log(micky.__proto__);
console.log(micky.__proto__ === Person.prototype);
console.log(Object.getPrototypeOf(micky) === Person.prototype);
console.log(micky.__proto__.__proto__);
console.log(micky.__proto__.__proto__.__proto__);

const sam = new Person("sam", 25);
console.log("sam", sam);

sam.getName();

Person.prototype.getAge = function () {
    console.log("Age is: " + this.age);
};

sam.getAge();
micky.getAge();

console.log(Object.keys(micky));

for (let key in micky) {
    console.log(key);
}
