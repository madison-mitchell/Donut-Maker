import DonutMaker from "./donutMaker.js"

const buttonDonut = document.querySelector("#donutButton"); //Actual Donut Image & Button
const buttonAutoClicker = document.querySelector("#addAutoClickerButton");
const headerDonutCount = document.querySelector("#donutCountHeader"); //Paragraph Element in HTML that lists Donut Count
const headerAutoClickerCount = document.querySelector("#autoClickerCountHeader") //Paragraph Element in HTML that lists Auto Clicker Count
const headerAutoClickerPrice = document.querySelector("#autoClickerPriceHeader") //Paragraph Element in HTML that lists Auto Clicker Count

const textDonutCountNumber = document.createElement("text"); //Creates text to go inside the headerDonutCount Element with the Donut Count
const textAutoClickerNumber = document.createElement("text"); //Creates text to go inside the headerAutoClickerCount Element with the Auto Clicker Count
const textAutoClickerPrice = document.createElement("text"); //Creates text to go inside the headerAutoClickerPrice Element with the Auto Clicker Count



let donutMaker = new DonutMaker(); //Constructor
renderPage();



function renderPage() {
    updateDonutCount();
    addAutoClicker();
}

function updateDonutCount() {
    const currentDonutCount = donutMaker.getDonutCount(); //Grabs Donut Count from Constructor and updates it to current count with any new clicks/multipliers
    textDonutCountNumber.innerText = currentDonutCount; //Set the inner text of the Text Element to the current number of Donuts
    headerDonutCount.appendChild(textDonutCountNumber); //Attaches the Text Element of the number of Donuts to the Paragraph Element in HTML that lists Donut Count
}

function addAutoClicker() { //Updates Auto Clicker Count on page
    const currentAutoClickerCount = donutMaker.getAutoClickerCount(); //Grabs Auto Clicker Count and updates it to current count
    const currentAutoClickerPrice = donutMaker.getAutoClickerPrice(); //Grabs Auto Clicker Price and updates it to current count
    textAutoClickerNumber.innerText = currentAutoClickerCount;
    textAutoClickerPrice.innerText = currentAutoClickerPrice;
    headerAutoClickerCount.appendChild(textAutoClickerNumber); //Attaches the Text Element of the number of Auto Clickers to the Paragraph Element in HTML that lists Auto Clicker Count
    headerAutoClickerPrice.appendChild(textAutoClickerPrice); //Attaches the Text Element of the number of Auto Clickers to the Paragraph Element in HTML that lists Auto Clicker Count
}

function buyAutoClicker() { 
    donutMaker.buyAutoClicker(); //Pays for Auto Clicker, adds 1 and increases price
    addDonutByAutoClicker();
}

function addDonutByAutoClicker() {
    donutMaker.addDonutByAutoClicker();
}

function clickDonut() {
    donutMaker.clickDonut(); //Runs function for when the Donut button is clicked to make X number of donuts
}



buttonDonut.addEventListener("click", () => {
    clickDonut();
    updateDonutCount();
});

buttonAutoClicker.addEventListener("click", () => {
    buyAutoClicker();
    updateDonutCount();
    addAutoClicker();
})