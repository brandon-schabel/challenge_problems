def sequence_sum(begin_number, end_number, step):
    #pythons for num in range(begin, end, step) doesn't work well because
    #it doesn't include the end number
    total = 0
    current_num = begin_number
    if(begin_number > end_number):
        return total

    while(current_num <=end_number):
        #add to the total(including beginning num) as long as the current
        #number is less than theend number
        total += current_num
        #increament current_num by the desired step count
        current_num += step
    return total
