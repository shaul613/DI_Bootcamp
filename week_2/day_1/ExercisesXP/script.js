
// Exercise 1
let favoriteFood = "Pizza";
let favoriteMeal = "Dinner";
console.log("I will eat " + favoriteFood + " for " + favoriteMeal);

// Exercise 2
// Using this array : let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries.
let myWatchedSeriesLength = myWatchedSeries.length;
// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory
let myWatchedSeriesSentence = `${myWatchedSeries[0]}, ${myWatchedSeries[1]}, and ${myWatchedSeries[2]}`;
// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory
console.log(`I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}.`);

// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of
// “the big bang theory” series.
myWatchedSeries.splice(myWatchedSeries.indexOf("the big bank theory"),1,"friends");
// Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push("NCIS");
// Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries.unshift("my favorite series");
// Delete the series “black mirror”.
myWatchedSeries.splice(myWatchedSeries.indexOf("black mirror"),1);
// Console.log the third letter of the series “money heist”.
console.log(myWatchedSeries[myWatchedSeries.indexOf("money heist")][2]);
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
console.log(myWatchedSeries);


//Exercise 3
// Store a celsius temperature into a variable.
// 
// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32
//Exercise 4

//Exercise 5

//Exercise 6
