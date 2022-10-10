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
