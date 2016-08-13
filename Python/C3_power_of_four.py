# Challenge: 1
# Source: leetcode
# Difficulty: Easy

# Instructions
# Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

# Example:
# Given num = 16, return true. Given num = 5, return false.

def power_of_four(num):
	if num % 4 == 0:
		return True
	else:
		return False

print power_of_four(8)
print power_of_four(25)
print power_of_four(40)
