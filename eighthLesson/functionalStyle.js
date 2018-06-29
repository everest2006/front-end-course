function Animal(name, kg) {
    var name = name;
    var kg = kg;
    var eat = function () {
        return kg;
    };
    this.run = function () {
        return `${name} runs`;
    };
    this.howManyEat = function () {
        return `${name} ест ${eat()} килограмм`;
    }
}

function Cat (name, kg) {
    Animal.call(this, name, kg);
    this.catEat = function () {
        return `Cat’s name is ${name}`;
    }
}

function Dog (name, kg) {
    Animal.call(this, name, kg);
    this.dogEat = function () {
        return `Dog’s name is ${name}`;
    }
}