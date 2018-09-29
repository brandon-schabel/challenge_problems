def generateIntegers(n):
  complete_array = []
  for current_num in range(0, len(n)):
    #print('Current Num: ' + str(current_num))
    if current_num > len(n):
      break
    else:
      total = []
      for num in range(0, n[current_num]):
        total.append(num)
      if(len(total) > 0):
        complete_array.append(total)
  return complete_array

print(generateIntegers([0, 1, 2, 3, 10]))
      
