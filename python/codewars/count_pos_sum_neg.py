def count_positives_sum_negatives(arr):
    #your code here
    posCount = 0
    negSum = 0
    if len(arr) <= 0:
        return []
    else:
        for num in arr:
            if num > 0:
                posCount += 1
            elif num < 0:
                negSum += num
    return [posCount, negSum]

print(count_positives_sum_negatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
      
