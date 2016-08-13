# Challenge: 3
# Source: leetcode
# Difficulty: Easy

# Instructions
# Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

# Example:
# Given num = 16, return true. Given num = 5, return false.

import math
def power_of_four(num):
    return True if math.log(num, 4) % 1 == 0 else False
    
    
print power_of_four(64)
print power_of_four(8)
print power_of_four(256)
print power_of_four(1000)
