const headerDonutCount = document.querySelector("#donutCountHeader");

class DonutMaker {
    constructor() {
        this._donutCount = 100;
        this._donutsPerSecond = 0;
        this._autoClickerCount = 0;
        this._autoClickerPrice = 100;
        this._multiplier = 1;
        this._multiplierPrice = 10;
    }

    getDonutCount() {
        return Math.floor(this._donutCount);
    }

    getDonutsPerSecond() {
        return (this._donutsPerSecond = (1 * this._autoClickerCount * this._multiplier)).toFixed(2);
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
        return (this._multiplierPrice).toFixed(2);
    }

    clickDonut() {
        this._donutCount += 1 * this._multiplier;
    }

    addDonutByAutoClicker() {
        if (this._autoClickerCount >= 1) {
            setInterval(() => {
                this._donutCount += (this._autoClickerCount * 1) * this._multiplier;
                headerDonutCount.innerText = this.getDonutCount();
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

    buyMultiplier() {
        if (this._donutCount >= this._multiplierPrice) {
            this._donutCount -= this._multiplierPrice;
            this._multiplier *= 1.2;
            this._multiplierPrice *= 1.1;
        }
    }

    addDonutByMultiplier() {
        const _multiplier = Math.pow(1.2, this._multiplier).toFixed(2);
    }

    resetGame() {
        this._donutCount = 0;
        this._donutsPerSecond = 0;
        this._autoClickerCount = 0;
        this._autoClickerPrice = 100;
        this._multiplier = 1;
        this._multiplierPrice = 10;
    }
}

export default DonutMaker;