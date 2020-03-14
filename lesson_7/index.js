var Animal = function (){
    this.size = '';
}

Animal.prototype.GetSize = function(){
    return this.size;
}

var BigAnimal = function (){
    this.size = 'Big';
}

BigAnimal.prototype = Object.create(Animal.prototype);

var Dino = function(){
    BigAnimal.call(this);
} 

Dino.prototype = Object.create(BigAnimal.prototype);

var dino = new Dino();
console.log(dino.GetSize());
