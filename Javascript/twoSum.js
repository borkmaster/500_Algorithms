/*
    
    Challenge: 1
    Difficulty: Easy

    Instructions:
	Given an array of integers, return indices of the two numbers such that they add up to a specific target.
	You may assume that each input would have exactly one solution.

*/

var twoSum = function(arr, target) {
    targetIndices = []
    for ( var i = 0; i < arr.length; i++ ) {
        for ( var a = i+1; a < arr.length; a++ ) {
            if ( arr[i] + arr[a] === target ) {
                targetIndices.push(arr[i]);
                targetIndices.push(arr[a]);
            }
        }
    }
    if ( targetIndices.length === 0 ) {
        return "No match found";
    }
    else {
        return targetIndices;
    }
}
 
twoSum([2, 7, 11, 15], 9);