const donutCount = document.querySelector(".donutCount");

class DonutMaker {
    constructor() {
        this._donutCount = 0;
    }

    getDonutCount() {
        return this._donutCount;
    }

    clickDonut() {
        this._donutCount += 1;
        console.log(this._donutCount);
    }
}

export default DonutMaker;