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
	if ( num % 4 === 0 ) {
		return true;
	}
	else {
		return false;
	}
}

console.log(powerOfFour(20));
console.log(powerOfFour(41));
console.log(powerOfFour(400));
