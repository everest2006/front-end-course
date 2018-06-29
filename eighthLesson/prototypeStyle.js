function Animal(name, kg) {
    var name = name;
    var kg = kg;
    var eat = function () {
        return kg;
    };
    this.getName = function () {
        return name;
    };
    this.getKg = function () {
      return kg;
    };
}

Animal.prototype.run = function () {
    return `${this.getName()} runs`;
};

Animal.prototype.howManyEat = function () {
    return `${this.getName()} ест ${this.getKg()} килограмм`;
};

function Cat (name, kg) {
    Animal.call(this, name, kg);
}
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
Cat.prototype.catEat = function () {
    return `Cat’s name is ${this.getName()}`;
};

function Dog (name, kg) {
    Animal.call(this, name, kg);
}
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;
Dog.prototype.dogEat = function () {
    return `Dog’s name is ${this.getName()}`;
};