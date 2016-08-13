# Challenge: 2
# Difficulty: Medium
# Source: Mango's Book?

# Instructions:
# A palindromic number reads the same both ways.
# The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
# Find the largest palindrome made from the product of two 3-digit numbers.

def palin_checker(num):
	num_arr = [i for i in str(num)]
	arr1 = ''.join(num_arr[0:len(num_arr)/2 + len(num_arr)%2])
	arr2 = ''.join(num_arr[len(num_arr)/2:])
	if arr1 == arr2[::-1]:
		return True
	else:
		return False

def large_palin():
	max_palin = 0
	palin_arr = [0,0]
	for i in range(100, 1000):
		for e in range(100, 1000):
			if palin_checker(i*e) and i*e > max_palin:
				max_palin = i*e
				palin_arr[0] = i
				palin_arr[1] = e
	print palin_arr, max_palin

large_palin()
