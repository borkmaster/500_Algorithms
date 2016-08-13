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
	var possNums = [];
	var power = 0;
	maxNum = num.toString().replace(/./g, 9);
	do {
		possNums.push(4 * Math.pow(4, power));
		power++;
	} while ( possNums[possNums.length-1] <= maxNum )
	possNums.pop();
	if ( possNums.indexOf(num) >= 0 ) {
		return true;
	}
	else {
		return false;
	}
}

console.log(powerOfFour(16));
console.log(powerOfFour(325));
console.log(powerOfFour(4));
