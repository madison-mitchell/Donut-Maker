import DonutMaker from "./donutMaker.js"

const buttonDonut = document.querySelector("#donutButton"); //Actual Donut Image & Button
const paraDonutCount = document.querySelector(".donutCount"); //Paragraph Element in HTML that lists Donut Count

let donutMaker = new DonutMaker(); //Constructor

const textDonutCountNumber = document.createElement("text"); //Creates text to go inside the paraDonutCount Element with the Donut Count
const currentDonutCount = donutMaker.getDonutCount(); //Grabs Donut Count and updates it to current count with any new clicks/multipliers

textDonutCountNumber.innerText = currentDonutCount; //Updates the text to go inside the paraDonutCount Element with the current Donut Count 

textDonutCountNumber.innerText = currentDonutCount; //Set the inner text of the Text Element to the current number of Donuts
paraDonutCount.appendChild(textDonutCountNumber); //Attaches the Text Element of the number of Donuts to the Paragraph Element in HTML that lists Donut Count


buttonDonut.addEventListener("click", () => {
    donutMaker.clickDonut(); //Runs function for when the Donut button is clicked to make X number of donuts

    const currentDonutCount = donutMaker.getDonutCount(); //Grabs Donut Count and updates it to current count with any new clicks/multipliers

    textDonutCountNumber.innerText = currentDonutCount; //Set the inner text of the Text Element to the current number of Donuts
    paraDonutCount.appendChild(textDonutCountNumber); //Attaches the Text Element of the number of Donuts to the Paragraph Element in HTML that lists Donut Count
});