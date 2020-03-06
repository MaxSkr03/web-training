var Wallet = require('./Wallet');

var Person = function () {
    this.wallet = new Wallet(100);
};

Person.prototype.Buy = function (price){
    if (price > this.wallet.GetCash()) console.log('Нет деняг, дайте деняг!!!!');
    else {
        this.wallet.RemoveCash(price);
        console.log('Я купил телек за ' + price + ' рублей!!!');
    };
};
Person.prototype.GetBalance = function (){
    return this.wallet.GetCash();
}
var person = new Person();
person.Buy(50);
console.log(person.GetBalance());
