/*
	Challenge: 5
	Source: leetcode

	Instructions:
	Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

	For example:

	Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
*/

var addDigits = function(num) {
	var numArr = [];
	while ( num > 9 ) {
		numArr = num.toString().split('');
		num = 0;
		for ( var i = 0; i < numArr.length; i++ ) {
			num += parseInt(numArr[i]);
		}
	}
	return num;
}

addDigits(99993);
