const buttonAutoClicker = document.querySelector("#addAutoClickerButton");
const buttonMultiplier = document.querySelector("#multiplierButton");
const headerDonutCount = document.querySelector("#donutCountHeader");
const headerTitleAutoClicker = document.querySelector("#autoClickerTitle");
const headerAutoClickerPrice = document.querySelector("#autoClickerPriceHeader");
const headerTitleMultiplier = document.querySelector("#multiplierTitle");
const headerMultiplierPrice = document.querySelector("#multiplierPriceHeader");
const headerNextMultiplierNumber = document.querySelector("#nextMultiplierCountHeader");

class DonutMaker {
    constructor() {
        this._donutCount = 0;
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

    checkIfGreyedOutAutoClickerButton() {
        if (this._donutCount >= this._autoClickerPrice) {
            headerTitleAutoClicker.style.color = "black";
            buttonAutoClicker.style.opacity = "100%";
            headerAutoClickerPrice.style.color = "black";
        } else {
            headerTitleAutoClicker.style.color = "grey";
            buttonAutoClicker.style.opacity = "50%";
            headerAutoClickerPrice.style.color = "grey";
        }
    }

    checkIfGreyedOutMultiplierButton() {
        if (this._donutCount >= this._multiplierPrice) {
            headerTitleMultiplier.style.color = "black";
            buttonMultiplier.style.border = "2px solid black";
            headerNextMultiplierNumber.style.color = "black";
            headerMultiplierPrice.style.color = "black";
        } else {
            headerTitleMultiplier.style.color = "grey";
            buttonMultiplier.style.border = "2px solid grey";
            headerNextMultiplierNumber.style.color = "grey";
            headerMultiplierPrice.style.color = "grey";
        }
    }

    addDonutByAutoClicker() {
        if (this._autoClickerCount >= 1) {
            setInterval(() => {
                this._donutCount += (this._autoClickerCount * 1) * this._multiplier;
                headerDonutCount.innerText = this.getDonutCount();
                this.checkIfGreyedOutAutoClickerButton();
                this.checkIfGreyedOutMultiplierButton();
            }, 1000);
        }
    }

    buyAutoClicker() {
        if (this._donutCount >= this._autoClickerPrice) {
            this._donutCount -= this._autoClickerPrice;
            this._autoClickerCount += 1;
            this._autoClickerPrice *= 1.10;
            this.checkIfGreyedOutAutoClickerButton();
            this.checkIfGreyedOutMultiplierButton();
        }
    }

    buyMultiplier() {
        if (this._donutCount >= this._multiplierPrice) {
            this._donutCount -= this._multiplierPrice;
            this._multiplier *= 1.2;
            this._multiplierPrice *= 1.1;
            this.checkIfGreyedOutAutoClickerButton();
            this.checkIfGreyedOutMultiplierButton();
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