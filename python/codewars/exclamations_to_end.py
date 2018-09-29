'''
def remove(s):
    s = s.split(" ")
    exclamations_end = ''

    #start counter for number of words in s
    for count in range(0, len(s) -1):
        #for each word create a list
        word = list(s[count])
        #while there are any '!' in any word
        while '!' in word:
            #remove them and add one exclamation to exclamations_end
            word.remove('!')
            exclamations_end += "!"
        
        #put word back together and replace the old word that was in the same spot
        word = ''.join(word)
        s[count] = word

    #return with the counted exclamations
    return (' '.join(s)) + exclamations_end

print(remove("Hi! Hi!"))
print(remove("Hi! Hi!! Hi!"))
'''
def remove(s):
    s = list(s)
    exclamations = ''
    #go through find each exclamation
    while '!' in s:
        #for any remove and add to exclamations
        s.remove('!')
        exclamations += '!'
        #return and add counted exclamations
    return ''.join(s) + exclamations
    
    
print(remove("Hi! Hi!"))
print(remove("Hi! Hi!! Hi!"))
'''
def remove(s):
    s = s.split(" ")
    for count in range(0, len(s) -1):
        word = list(s[count])
        if(word[-1] == '!'):
            word.pop(-1)
            s[len(s)-1] += '!'
        word = ''.join(word)
        s[count] = word

    return ' '.join(s)

print(remove("Hi! Hi!"))
'''

'''
def remove(s):
    s = s.split(" ")
    print(s)
    print(len(s))
    for count in range(0, len(s) -1):
        word = list(s[count])
        if(word[-1] == '!'):
            print('word: ' + str(word))
            print(word[-1])
            word.pop(-1)
            print(str(word))
            s[len(s)-1] += '!'
        word = ''.join(word)
        print('word ' + word)
        print(s[count])
        s[count] = word

    print(' '.join(s))
    return ' '.join(s)

print(remove("Hi! Hi!"))
'''
