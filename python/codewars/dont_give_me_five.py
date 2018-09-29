def dont_give_me_five(start,end):
    count = 0
    for num in range(start, end+1):
        #iterate through each number in the set including the last number(end+1)
        current_num = str(num)
        current_num = list(current_num)
        #split to string then list from string
        #if that list contains 5 go t number
        if '5' in current_num:
            print('5')
            continue
        else:
            #otherwise add 1 to our count
            count += 1
    return count
