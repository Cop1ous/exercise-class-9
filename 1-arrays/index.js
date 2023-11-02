// Question 1
var classroomSuplies = ['pen', 'paper', 'desk', 'computer'];
console.log(classroomSuplies);
classroomSuplies.sort();
console.log(classroomSuplies);
// pen paper desk computer

// Question 2

var travelPlaces = ['Toronto', 'New York', 'Autralia', 'Spain'];
console.log(travelPlaces);
// Toronto New York Autralia Spain

//Question 3

var bakingRecipes = ['brownies', 'cookies', 'cakes', 'tarts']
bakingRecipes.pop(3);
console.log(bakingRecipes);
// brownies cookies cakes

// Question 4

var schedule = [
    ['Comp 1170', 'MDIA 1055', 'MDIA 1106', 'MDIA1620']
    ['Fudamentals Frontend Web Tech', 'Vector Graphics', 'Design', 'Basic Systems Operations and Prog']
    ['3.0', '3.0', '3.0', '3.0']
];
console.table(schedule);
console.log("I am taking" + [0][2] + [1][2] + "that is worth" + [2][2] + "credits");

/**
 * Question 5
 * 
 * Create two arrays; One named 'Games' and one named 'instruments', give the games array the values Valorant, League, and R6,
 * then give instruments the values guitar, piano, and bass.
 * use the .concat command to turn these two arrays into one variable.
 * Console log the result, and comment what that will be
 */

var Games = ['Valorant', 'League', 'R6']
var Instruments = ['Guitar', 'Piano', 'Bass']
var arrays = Games.concat(Instruments);

console.log(arrays)
// Valorant League R6 Guitar Piano Bass

/**
 * Question 6 
 * 
 * create a Bidimentional array that has the values of the first dimention as "Silver, Gold, Platinum, Diamond"
 * and the second dimension as "I, II, III, IV"
 * console log out the sentence "I am Diamond III" using concatenation.
 */

var Rank = [
    ['Silver', 'Gold', 'Platinum', 'Diamond']
    ['I', 'II', 'III', 'IV']
];


console.log('I am' + [0][3] + [1][2]); // I am Diamond III