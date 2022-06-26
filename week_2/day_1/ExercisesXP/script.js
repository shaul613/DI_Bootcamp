
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
let temperature = 100;
// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32
let celsiusToFahrenheit = temperature * 9 / 5 + 32;
console.log(`${temperature} C is ${celsiusToFahrenheit} F.`);

//Exercise 4
// For each expression, predict what you think the output will be in a comment (//) without first running
// the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with
// your prediction.
// Using the code below:
//
    let c;
    let a = 34;
    let b = 21;
//
    console.log(a+b);
//     // Prediction: 55. because a and b are numbers, and 34+21=55.
//     // Actual: 55.
//
    a = 2;
//
    console.log(a+b);
//     // Prediction: 23. Because the value of a changed.
//     // Actual: 23.
// What will be the outcome of a + b in the first expression ? 55. because a and b are numbers, and 34+21=55.
// What will be the outcome of a + b in the second expression ? 23. Because the value of a changed.
// What is the value of c? Undefined. Because it was not assigned a value.
//
// Analyse the code below, what will be the outcome?
// console.log(3 + 4 + '5'); 75. Becasue 3+4=7, and 5 is a string, displaying 7 and 5 near each other.


//Exercise 5

console.log(typeof(15));
// Prediction:number
// Actual:number

console.log(typeof(5.5));
// Prediction:number
// Actual:number

console.log(typeof(NaN));
// Prediction:number
// Actual:number

console.log(typeof("hello"));
// Prediction:string
// Actual:string

console.log(typeof(true));
// Prediction: boolean
// Actual:boolean

console.log(typeof(1 != 2));
// Prediction:boolean
// Actual:boolean

console.log("hamburger" + "s");
// Prediction:hamburgers
// Actual:hamburgers

console.log("hamburgers" - "s");
// Prediction:null
// Actual:Nan

console.log("1" + "3");
// Prediction:13
// Actual:13

console.log("1" - "3");
// Prediction:Nan
// Actual:-2

console.log("johnny" + 5);
// Prediction:johnny5
// Actual:johnny5

console.log("johnny" - 5);
// Prediction: Nan
// Actual:Nan

console.log(99 * "hello");
// Prediction:hellohellohello etc...
// Actual:Nan

console.log(1 != 1);
// Prediction:false
// Actual:false

console.log(1 == "1");
// Prediction:true
// Actual:true

console.log(1 === "1");
// Prediction:false
// Actual:false


//Exercise 6

console.log(5 + "34");
// Prediction:534
// Actual:534

console.log(5 - "4");
// Prediction:Nan
// Actual:1

console.log(10 % 5);
// Prediction:0
// Actual:0

console.log(5 % 10);
// Prediction:5
// Actual:5

console.log("Java" + "Script");
// Prediction:JavaScript
// Actual:JavaScripot

console.log(" " + " ");
// Prediction:
// Actual:

console.log(" " + 0);
// Prediction: 0
// Actual: 0

console.log(true + true);
// Prediction:true
// Actual:2

console.log(true + false);
// Prediction:1
// Actual:1

console.log(false + true);
// Prediction:1
// Actual:1

console.log(false - true);
// Prediction:-1
// Actual:-1

console.log(!true);
// Prediction:false
// Actual:fasle

console.log(3 - 4);
// Prediction:-1
// Actual:-1

console.log("Bob" - "bill");
// Prediction:Nan
// Actual:Nan
