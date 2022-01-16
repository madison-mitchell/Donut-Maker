const donutCount = document.querySelector("#donutCount");

class DonutMaker {
    constructor() {
        this._donutCount = 2000;
        this._autoClickerCount = 0;
        this._autoClickerPrice = 100;
        this._autoClickerDonuts = 0;
    }

    getDonutCount() {
        return Math.floor(this._donutCount);
    }

    getAutoClickerCount() {
        return this._autoClickerCount;
    }

    getAutoClickerPrice() {
        return (this._autoClickerPrice).toFixed(2);
    }

    getMultiplier() {
        return this._multiplier;
    }

    getMultiplierPrice() {
        return this._multiplierPrice;
    }

    clickDonut() {
        this._donutCount += 1;
    }

    addDonutByAutoClicker() { //NOT WORKING; Not adding to actual donut count in constructor
        if (this._autoClickerCount >= 1) {
            setInterval(() => {
                this._donutCount += this._autoClickerCount;
                console.log('auto click count is ' + this._autoClickerCount);
                console.log('donut count is ' + this._donutCount);
                console.log('auto price is ' + this._autoClickerPrice);
            }, 1000);
        }
    }

    buyAutoClicker() {
        if (this._donutCount >= this._autoClickerPrice) {
            this._donutCount -= this._autoClickerPrice;
            this._autoClickerCount += 1;
            this._autoClickerPrice *= 1.1;
        }
    }
}

export default DonutMaker;