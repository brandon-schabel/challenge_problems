def find_missing_number(sequence):
    if len(sequence) == 0 or len(sequence.split(" ")) == 0:
        return 0
    
    numSequence = sequence.split(" ")
    print(numSequence)
    '''
    numSequence = [int(x) for x in numSequence]
    numSequence.sort()
    print(numSequence)
    numSequence = [str(x) for x in numSequence]
    print(numSequence)'''
    numSeqAllNums = False
    print("length of numSequence" + str(len(numSequence)))
    
    for num in range(0, len(numSequence)):
        if(numSequence[num].isdigit()):
            print(str(numSequence[num]) + 'isDigit')
        if(numSequence[num].isdigit()):
            print('num' + str(num) + 'numSequence' + str(len(numSequence)))
            if(num+1 >= len(numSequence)):
                numSeqAllNums = True
            continue
        else:
            break
    print(numSeqAllNums)

    if(numSeqAllNums):
        numSequence = [str(x) for x in numSequence]
        for num in range(0, len(numSequence)):
            if numSequence[num].isdigit() is not True:
                return num + 1
            elif(numSequence[num].isdigit() and num+1 != int(numSequence[num])):
                return num + 1
            elif num >= len(numSequence):
                return 0
        return 0

        
    for num in range(0, len(numSequence)):
        print("num + 1: " + str(num + 1) + " numSequence: " + numSequence[num])
        if numSequence[num].isdigit() is not True:
            return num + 1
        elif(numSequence[num].isdigit() and num+1 != int(numSequence[num])):
            return num + 1
        elif num >= len(numSequence):
            return 0
    return 0

print(find_missing_number("1 2 3 5"))
print(find_missing_number(""))
print(find_missing_number("1 15 3 6 11 7 4 13 14 8 10 2 12 9"))
