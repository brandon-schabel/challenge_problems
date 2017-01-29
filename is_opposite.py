'''
Give you two strings: s1 and s2. If they are opposite, return true; otherwise,
return false. Note: The result should be a boolean value, instead of a string.
'''
def is_opposite(s1,s2):
  # your code here
  if(len(s1) ==0 or None):
    return False

  for char in range(len(s1)):   
    if (s1[char] == s2[char]):
      return False
  return True

is_opposite("ab","AB")
