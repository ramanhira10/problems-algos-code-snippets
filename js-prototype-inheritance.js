const Parent = function (name, age) {
    this.name = name;
    this.age = age;
};

Parent.prototype.getNameAge = function () {
    console.log("name is: " + this.name + " and age is: " + this.age);
};

const joseph = new Parent ("joseph", 35);
joseph.getNameAge();

const Child = function (name, age, isCrying) {
    Parent.call(this, name, age);
    this.isCrying = isCrying;
};

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

const josephBaby = new Child("josephBaby", 3, true);
console.log(josephBaby);
josephBaby.getNameAge();
