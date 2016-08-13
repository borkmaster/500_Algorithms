/*
	Challenge: 6
	Difficulty: EZPZ
	Source: Mango's book?

	Instructions:
	Scale the array

	Given an array arr and a number num, multiply all values in arr by num, and return the changed arr.
*/

var scaleArr = function(arr, num) {
	for ( var i = 0; i < arr.length; i++ ) {
		arr[i] = arr[i] * num;
	}
	return arr
}

scaleArr([1,2,3,4,5], 5);
