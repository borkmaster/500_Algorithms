/*
	Challenge: 3
	Source: leetcode
	Difficulty: Easy

	Instructions:
	Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

	Example:
	Given num = 16, return true. Given num = 5, return false.
*/

var powerOfFour = function(num) {
    powerCheck = Math.log(num) / Math.log(4);
    if ( powerCheck % 1 === 0 ) {
        console.log(num + " is the " + powerCheck + " power of 4");
        return true;
    }
    else {
        console.log(num + " is not a power of 4");
        return false;
    }
}

powerOfFour(64);
powerOfFour(72);
powerOfFour(1028);
powerOfFour(1048576);
