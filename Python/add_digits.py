# Challenge: 5
# Source: leetcode

# Instructions:
# Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

# For example:

# Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

def add_digits(num):
	return num % 9 or 9 if (num) else 0

print add_digits(123456)