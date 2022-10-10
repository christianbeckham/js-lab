// ------------------
// SECTION: VARIABLES
// ------------------

// Task 1: Days of the week
let dayOfWeek = "Monday";
console.log(dayOfWeek);

dayOfWeek = "Friday";
console.log(`I can't wait for ${dayOfWeek}!`);

// Task 2: User Input
let animalInput = prompt("What is your favorite animal?");
let colorInput = prompt("What is your favorite color?");

let outputString = `I've never seen a ${colorInput} ${animalInput}!`;

console.log(outputString);

// ---------------------
// SECTION: CONDITIONALS
// ---------------------

// Task 1: Meals

// favorite breakfast: Cereal
// favorite lunch: Tacos
// favorite dinner: Steak

let timeOfDay = 1300;

let favoriteMeal;

if (timeOfDay < 1200) {
	favoriteMeal = "Cereal";
} else if (timeOfDay > 1200 && timeOfDay < 1700) {
	favoriteMeal = "Tacos";
} else if (timeOfDay > 1700) {
	favoriteMeal = "Steak";
}

console.log(`Favorite meal is: ${favoriteMeal}`);

// Task 2: Random Number

let randomNumber = Math.floor(Math.random() * 10) + 1;

if (randomNumber >= 0 && randomNumber <= 2) {
	console.log("Beatles");
} else if (randomNumber >= 3 && randomNumber <= 5) {
	console.log("Stones");
} else if (randomNumber >= 6 && randomNumber <= 8) {
	console.log("Floyd");
} else if (randomNumber === 9 || randomNumber === 10) {
	console.log("Hendrix");
}

// ------------------
// SECTION: FOR LOOPS
// ------------------

// Task 1

for (let i = 0; i < 7; i++) {
	console.log("JavaScript is cool!");
}

// Task 2

for (let i = 0; i < 11; i++) {
	console.log(i);
}

// Task 3

for (let i = 0; i < 10; i++) {
	if (i % 2 === 0) {
		console.log("hello");
	} else {
		console.log("goodbye");
	}
}

// ------------------
// SECTION: FUNCTIONS
// ------------------

// Task 1: Favorite movie (void functions)

function printMovieName() {
	let favoriteMovie = "Shrek";
	console.log(favoriteMovie);
}

printMovieName();

// Task 2: Favorite band (return functions)

function getUserInput(message) {
	let inputPrompt = prompt(message);
	return inputPrompt;
}

function favoriteBand() {
	let userInput = getUserInput("What is your favorite band?");
	return userInput;
}

let favoriteBandName = favoriteBand();
console.log(`Favorite band: ${favoriteBandName}`);

// Task 3: Concert

function concertDisplay(musicalAct) {
	let myStreet = prompt("What street do you live on?");
	console.log(
		`It would be great if ${musicalAct} played a show on ${myStreet}!`
	);
}

concertDisplay(favoriteBandName);

// ---------------
// SECTION: ARRAYS
// ---------------

// Task 1: Desktop Items

let desktopItems = ["laptop", "monitors", "charger", "dock", "book"];
console.log(desktopItems[1]);

desktopItems.push("Infinity Gauntlet");

for (let i = 0; i < desktopItems.length; i++) {
	console.log(desktopItems[i]);
}
