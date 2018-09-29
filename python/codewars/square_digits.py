def square_digits(num):
    final = ''
    final = ''
    #iterate through each number by converting to string
    #then mutliple by itself, convert back to string and add it to the final num
    for i, c in enumerate(str(num)):
        final += str(int(c) * int(c))

    return int(final)

print(square_digits(2010040))
