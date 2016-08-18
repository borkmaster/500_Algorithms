# Challenge: 6
# Difficulty: EZPZ
# Source: Mango's book?

# Instructions:
# Scale the array

# Given an array arr and a number num, multiply all values in arr by num, and return the changed arr.

def scale_arr(arr, num):
	for e in range(len(arr)-1):
		arr[e] *= num
	return arr

print scale_arr([1,2,3,4,5], 5)
