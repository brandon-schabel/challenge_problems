def generateIntegers(n):
  total = []
  if(n==0):
      return [0]
  else:
      for num in range(0,n + 1):
          total.append(num)
  return total
        
print(generateIntegers(1))
print(generateIntegers(3))
print(generateIntegers(10))
