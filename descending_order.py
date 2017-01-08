def descending_order(num):
    finalNum = []
    numArray = list(str(num))
    
    for currentNum in numArray:
        if not finalNum:
            finalNum.append(currentNum)
        elif currentNum in finalNum:
            finalNum.insert(finalNum.index(currentNum), currentNum)
        elif currentNum > finalNum[0]:
            finalNum.insert(0, currentNum)
        else:
            finalNum.append(currentNum)
            
    return int(''.join(finalNum))

print(Descending_Order(2101))
