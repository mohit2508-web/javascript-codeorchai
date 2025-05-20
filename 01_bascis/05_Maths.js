// const number=123400.45884;

// console.log(number.toLocaleString('en-IN'))
// console.log(number.toFixed(2));


// console.log(Math.floor((Math.random()*10)+1))

// let min=10;
// let max=20;

// console.log(Math.floor(Math.random()*(max-min+1))+min);

//  Guessing Game

let maxinput = prompt("Enter the range of guess number:", "");
let max = Number(maxinput);
let min = 0;

let random = Math.floor(Math.random() * (max - min + 1) + min);

let guessno = Number(prompt("Please guess the number:", ""));

while (guessno !== random) {
    if (guessno > random) {
        alert("Too high! Try again.");
    } else {
        alert("Too low! Try again.");
    }

    guessno = Number(prompt("Please guess the number:"));
}

alert("You guessed correctly!");
