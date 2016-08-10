/*
	Challenge: 2
	
	Instructions:
	A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
	Find the largest palindrome made from the product of two 3-digit numbers.
*/

var palinChecker = function(num) {
	var numArray = num.toString().split('');
	var arr1 = numArray.slice(0, numArray.length/2 + numArray.length%2);
	var arr2 = numArray.slice(numArray.length/2).reverse();

	if (arr1.join('') === arr2.join('')) {
		return true;
	}
	else {
		return false;
	}
}

var largePalin = function() {
	var maxPalin = 0;
	palinArr = [];
	for ( var i = 100; i < 1000; i++ ) {
		for ( var e = 100; e < 1000; e++ ) {
			if (palinChecker(i*e) && i*e > maxPalin) {
				maxPalin = i*e;
				palinArr[0] = i;
				palinArr[1] = e;
			}
		}
	}
	return palinArr;
}

largePalin();