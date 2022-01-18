import DonutMaker from "./donutMaker.js"

const buttonDonut = document.querySelector("#donutButton");
const buttonAutoClicker = document.querySelector("#addAutoClickerButton");
const buttonMultiplier = document.querySelector("#multiplierButton");
const headerDonutCount = document.querySelector("#donutCountHeader");
const headerDonutsPerSecond = document.querySelector("#donutsPerSecondHeader")
const headerTitleAutoClicker = document.querySelector("#autoClickerTitle");
const headerTitleMultiplier = document.querySelector("#multiplierTitle");
const headerAutoClickerPrice = document.querySelector("#autoClickerPriceHeader");
const headerMultiplierPrice = document.querySelector("#multiplierPriceHeader");
const headerNextMultiplierNumber = document.querySelector("#nextMultiplierCountHeader");




let donutMaker = new DonutMaker(); //Constructor

// function updateDonutCount() {
//     headerDonutCount.innerText = donutMaker.getDonutCount();
//     headerDonutsPerSecond.innerText = donutMaker.getDonutsPerSecond();
//     // console.log(donutMaker._donutsPerSecond);
//     console.log(donutMaker.getDonutCount());
//     checkIfGreyedOutMultiplierButton();
//     checkIfGreyedOutAutoClickerButton();
// }

function checkIfGreyedOutAutoClickerButton() {
    if (donutMaker._donutCount < donutMaker._autoClickerPrice) {
        headerTitleAutoClicker.style.color = "grey";
        buttonAutoClicker.style.opacity = "50%";
        headerAutoClickerPrice.style.color = "grey";
    } else {
        headerTitleAutoClicker.style.color = "black";
        buttonAutoClicker.style.opacity = "100%";
        headerAutoClickerPrice.style.color = "black";
    }
}

function checkIfGreyedOutMultiplierButton() {
    if (donutMaker._donutCount < donutMaker._multiplierPrice) {
        headerTitleMultiplier.style.color = "grey";
        buttonMultiplier.style.border = "2px solid grey";
        headerNextMultiplierNumber.style.color = "grey";
        headerMultiplierPrice.style.color = "grey";
    } else {
        headerTitleMultiplier.style.color = "black";
        buttonMultiplier.style.border = "2px solid black";
        headerNextMultiplierNumber.style.color = "black";
        headerMultiplierPrice.style.color = "black";
    }
}

// export default updateDonutCount;
export default checkIfGreyedOutAutoClickerButton;