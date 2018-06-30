class Animal {
    constructor(name, kg){
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
    run () {
        return `${this.getName()} runs`;
    };

    howManyEat () {
        return `${this.getName()} ест ${this.getKg()} килограмм`;
    };

}

class Cat extends Animal{
    constructor(name, kg){
        super(name,kg);
    }
    catEat () {
        return `Cat’s name is ${this.getName()}`;
    };
}

class Dog extends Animal{
    constructor (name, kg) {
        super(name, kg);
    }
    dogEat () {
        return `Dog’s name is ${this.getName()}`;
    };
}