let COLORS_ARRAY = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow', 'purple', 'pink', 'brown'];

function runGame() {
    let guess = '';
    let correct = false;
    let numTries = 0;
    const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length);
    const target = COLORS_ARRAY[targetIndex];
    
    console.log(`The target is: ${target}`);
    
    do {
    guess = prompt(`I am thinking of one of these colors: ${COLORS_ARRAY.sort().join(", ")} \n\ what color am I thinking of?`)
    numTries += 1;
    if(guess === null) {
        alert(`You didn't guess anything, the game is finished`)
        return;
    }     
        correct = checkGuess(guess, target);    
} while (!correct); 
alert(`You guessed the correct color, the color was ${target} \n\ It took you ${numTries} tries to guess the number.`);
document.body.style.background = guess;
};
function checkGuess(guess, target) {
    guess = guess.toLowerCase();
    let correct = false;
    if(!COLORS_ARRAY.includes(guess)){
        alert(`Sorry I don't regconize your color.`)
    } else if (guess < target) {
        alert(`Guess is lower than the target`);
    } else if (guess > target){
        alert(`Guess is higher than the target`);
    } else {
        correct = true;
    }
    return correct;
};
