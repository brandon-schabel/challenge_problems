def find_average(array):
    #if len of the array is 0 return 0 so it doesn't error out
    if len(array) == 0:
        return 0
    
    total = 0
    #loop through each item, add to total, return total divided by length
    for x in array:
        total += x
    return total/len(array)
