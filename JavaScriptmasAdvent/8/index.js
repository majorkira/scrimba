/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it wold in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

event listeners, Math.random()

*/

// Write your code here 👇
// This would have been a lot cleaner with grid but oh well
let dice = document.querySelector(".dice");
let display = document.querySelector(".display");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
dice.addEventListener("click", changeFace);

function changeFace() {
    let diceNum= Math.floor(Math.random()*6+1);
    display.innerHTML = diceNum;
    switch(diceNum) {
        case 1: 
        one.classList.add('invisidot');
        two.classList.add('invisidot');
        three.classList.add('invisidot');
        four.classList.add('invisidot');
        five.classList.remove('invisidot');
        six.classList.add('invisidot');
        seven.classList.add('invisidot');
        eight.classList.add('invisidot');
        nine.classList.add('invisidot');
        break;
        case 2:
        one.classList.add('invisidot');
        two.classList.add('invisidot');
        three.classList.remove('invisidot');
        four.classList.add('invisidot');
        five.classList.add('invisidot');
        six.classList.add('invisidot');
        seven.classList.remove('invisidot');
        eight.classList.add('invisidot');
        nine.classList.add('invisidot');
        break;
        case 3:
        one.classList.add('invisidot');
        two.classList.add('invisidot');
        three.classList.remove('invisidot');
        four.classList.add('invisidot');
        five.classList.remove('invisidot');
        six.classList.add('invisidot');
        seven.classList.remove('invisidot');
        eight.classList.add('invisidot');
        nine.classList.add('invisidot');
        break;
        case 4:
        one.classList.remove('invisidot');
        two.classList.add('invisidot');
        three.classList.remove('invisidot');
        four.classList.add('invisidot');
        five.classList.add('invisidot');
        six.classList.add('invisidot');
        seven.classList.remove('invisidot');
        eight.classList.add('invisidot');
        nine.classList.remove('invisidot');
        break;
        case 5:
        one.classList.remove('invisidot');
        two.classList.add('invisidot');
        three.classList.remove('invisidot');
        four.classList.add('invisidot');
        five.classList.remove('invisidot');
        six.classList.add('invisidot');
        seven.classList.remove('invisidot');
        eight.classList.add('invisidot');
        nine.classList.remove('invisidot');
        break;
        case 6:
        one.classList.remove('invisidot');
        two.classList.add('invisidot');
        three.classList.remove('invisidot');
        four.classList.remove('invisidot');
        five.classList.add('invisidot');
        six.classList.remove('invisidot');
        seven.classList.remove('invisidot');
        eight.classList.add('invisidot');
        nine.classList.remove('invisidot');
        break;
    }
}


/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. Create other 5 dice faces in CSS
3. use eventlisteners on the appropriate div
4. Display dice faces randomly on click

STRETCH GOALS:
- Can you show the number you rolled as a integer along-side the dice face?
- Can you improve the overall design?
*/
