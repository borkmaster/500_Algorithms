# Challenge: 1
# Source: leetcode
# Difficulty: Easy

# Given an array of integers, return indices of the two numbers such that they add up to a specific target.

# You may assume that each input would have exactly one solution.

# Example:
# Given nums = [2, 7, 11, 15], target = 9,

# Because nums[0] + nums[1] = 2 + 7 = 9,
# return [0, 1].

def two_sum(arr, target):
	target_indices = [0,0]
	for i in range(len(arr)):
		for e in range(i+1, len(arr)):
			if arr[i] + arr[e] == target:
				target_indices[0] = i
				target_indices[1] = e
	if target_indices[1] == 0:
		print "No matches found"
	else: 
		print target_indices


two_sum([2, 7, 11, 5, 15, 5], 10)