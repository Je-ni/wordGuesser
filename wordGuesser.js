//1. //30th april 2018
// making a wordguesser game
// when someone guesses a word, it checks the array to see if
// the word is in the array. if yes, return yay! you guessed right.
// else return oops
                                //WORD_GUESSER
//create an array named words which contains the names of some backend developers
var words = ['chidera', 'jennifer', 'olibie', 'chinonso','williams', 
            'jude', 'ifeoma','lucia','nwosu','uche', 'ndife', 
            'kene','ibeh', 'chika','valentine', 'oragbakusi', 'agwu'];
//create the function for the wordGuesser
function wordGuesser(word){ //declare the function
    for( var i = 0; i <= words.length-1; i++){ //a for loop to go through the array
        if (word == words[i]){ //if the word matches an element in the array
            comment = 'Yah, you guessed right'; //the output
            break; //break out of the loop so it doesnt check others and change the value of comment
        }else{ //if the word doesnt't match
            comment = 'Nahh, not there'; 
        }
    }
    console.log(comment); //log the output to the console
};
wordGuesser('olibie'); //outputs 'yah, you guessed right'
wordGuesser('osita'); //outputs 'Nahh, not there'

//2.
//Write an article on how and why you wrote this code. the procees it went through
//https://medium.com/@jenniferolibie/guesser-game-vs-first-day-1f739f66e8f