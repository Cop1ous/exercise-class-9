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