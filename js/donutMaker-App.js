import DonutMaker from "./donutMaker.js"
import checkIfGreyedOutAutoClickerButton from "./function-updateDonutCount.js"
import checkIfGreyedOutMultiplierButton from "./function-updateDonutCount.js"
// import updateDonutCount from "./function-updateDonutCount.js"

const buttonDonut = document.querySelector("#donutButton");
const buttonAutoClicker = document.querySelector("#addAutoClickerButton");
const buttonMultiplier = document.querySelector("#multiplierButton");
const buttonReset = document.querySelector("#resetButton");
const headerDonutCount = document.querySelector("#donutCountHeader");
const headerDonutsPerSecond = document.querySelector("#donutsPerSecondHeader")
const headerTitleAutoClicker = document.querySelector("#autoClickerTitle");
const headerAutoClickerCount = document.querySelector("#autoClickerCountHeader");
const headerAutoClickerPrice = document.querySelector("#autoClickerPriceHeader");
const headerTitleMultiplier = document.querySelector("#multiplierTitle");
const headerCurrentMultiplier = document.querySelector("#multiplierHeader");
const headerMultiplierPrice = document.querySelector("#multiplierPriceHeader");
const headerNextMultiplierNumber = document.querySelector("#nextMultiplierCountHeader");


let donutMaker = new DonutMaker(); //Constructor
renderPage();



function renderPage() {
    addAutoClicker();
    addMultiplier();
    updateDonutCount();
    checkIfGreyedOutMultiplierButton();
    checkIfGreyedOutAutoClickerButton();
}

function updateDonutCount() {
    headerDonutCount.innerText = donutMaker.getDonutCount();
    headerDonutsPerSecond.innerText = donutMaker.getDonutsPerSecond();
    console.log(donutMaker._donutsPerSecond);
    checkIfGreyedOutMultiplierButton();
    checkIfGreyedOutAutoClickerButton();
}

function addAutoClicker() { //Updates Auto Clicker Count on page
    headerAutoClickerCount.innerText = donutMaker.getAutoClickerCount();
    headerAutoClickerPrice.innerText = donutMaker.getAutoClickerPrice();
}

function addMultiplier() { //Updates Multiplier on page
    headerMultiplierPrice.innerText = donutMaker.getMultiplierPrice();
    headerNextMultiplierNumber.innerText = "x" + (donutMaker.getMultiplier() * 1.2).toFixed(1);
    headerCurrentMultiplier.innerText = "x" + donutMaker.getMultiplier().toFixed(1);
}

function clickDonut() {
    donutMaker.clickDonut(); //Runs function for when the Donut button is clicked to make X number of donuts
    // donutMaker.getDonutCount() === 1;
    console.log(donutMaker.getDonutCount());
    updateDonutCount();
    checkIfGreyedOutMultiplierButton();
    checkIfGreyedOutAutoClickerButton();
}

function buyAutoClicker() {
    donutMaker.buyAutoClicker(); //Pays for Auto Clicker, adds 1 and increases price
    addDonutByAutoClicker();
}

function addDonutByAutoClicker() {
    donutMaker.addDonutByAutoClicker();
}

function buyMultiplier() {
    donutMaker.buyMultiplier(); //Pays for Auto Clicker, adds 1 and increases price
    addDonutByMultiplier();
}

function addDonutByMultiplier() {
    donutMaker.addDonutByMultiplier();
}

// function checkIfGreyedOutAutoClickerButton() {
//     if (donutMaker._donutCount < donutMaker._autoClickerPrice) {
//         headerTitleAutoClicker.style.color = "grey";
//         buttonAutoClicker.style.opacity = "50%";
//         headerAutoClickerPrice.style.color = "grey";
//     } else {
//         headerTitleAutoClicker.style.color = "black";
//         buttonAutoClicker.style.opacity = "100%";
//         headerAutoClickerPrice.style.color = "black";
//     }
// }

// function checkIfGreyedOutMultiplierButton() {
//     if (donutMaker._donutCount < donutMaker._multiplierPrice) {
//         headerTitleMultiplier.style.color = "grey";
//         buttonMultiplier.style.border = "2px solid grey";
//         headerNextMultiplierNumber.style.color = "grey";
//         headerMultiplierPrice.style.color = "grey";
//     } else {
//         headerTitleMultiplier.style.color = "black";
//         buttonMultiplier.style.border = "2px solid black";
//         headerNextMultiplierNumber.style.color = "black";
//         headerMultiplierPrice.style.color = "black";
//     }
// }



//Button Events
buttonDonut.addEventListener("click", () => {
    buttonDonut.style.opacity = "75%";
    setTimeout(() => {
        buttonDonut.style.opacity = "100%";
    }, 150);
    clickDonut();
    updateDonutCount();
})

buttonAutoClicker.addEventListener("click", () => {
    buyAutoClicker();
    updateDonutCount();
    addAutoClicker();
})

buttonMultiplier.addEventListener("click", () => {
    buyMultiplier();
    addMultiplier();
    updateDonutCount();
})

buttonReset.addEventListener("click", () => {
    donutMaker.resetGame();
    addMultiplier();
    addAutoClicker();
    updateDonutCount();
})