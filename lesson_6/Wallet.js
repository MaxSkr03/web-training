var Wallet = function (cash) {
    if (cash == null)
        this.cash = 0;
    else
        this.cash = cash;
};

Wallet.prototype.SetCash = function (cash){
    if (cash >= 0) this.cash = cash;
    else throw new Error('Cash не может быть меньше нуля!');
};

Wallet.prototype.GetCash = function (){
    return this.cash;
};


Wallet.prototype.AddCash = function (money) {
    var cash = this.GetCash();
    cash += money;
    this.SetCash(cash);
};

Wallet.prototype.RemoveCash = function (money){
    this.AddCash(-1 * money);
};

module.exports = Wallet;