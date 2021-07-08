//Creates variable to store the h1 tag from the index page
const header = document.querySelector("h1");
//Store the text from the header tag into variable headerText
const headerText = header.textContent;
//creates an array of each letter within the string headerText
const textArray = headerText.split("");
//removes the h1 tag from the webpage
header.textContent = "";

//loops through each letter in the textArray and wraps it within span tags to be displayed on the page
for (let i = 0; i < textArray.length; i++) {
    header.innerHTML += "<span>" + textArray[i] + "</span>";
}

//variable to store the index of the current span element
let index = 0;

let timer = setInterval(onTick, 50); //calls the onTick function every 50 ms and save the returned integer into timer
//saves the span elements within the header as a array into spanList
const spanList = header.querySelectorAll("span");

//Function to describe what should happen on each tick
function onTick(){
    spanList[index].classList.add("animate"); // gives the current span element the class of animate
    index++;//increases the value in index by 1
    //if the index is equal to the length of the spanList then the complete function is called and the function returns
    if (index === spanList.length){ 
        complete();
        return;
    }
    
}

//function to clear timer to be called when animation finishs
function complete(){
    clearInterval(timer);
    timer = null;
}