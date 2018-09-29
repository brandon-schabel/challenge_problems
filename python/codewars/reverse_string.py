def reverse(st):
    
    finalStr = ''
    splitStr = st.split(' ')
    #for each word in the splitStr
    for word in range(0, len(st.split(' '))):
        #add the word to the beginning of final string
        finalStr = splitStr[word] + ' ' +  finalStr

    #return the string minus the extra space on the end.
    return finalStr[0:len(finalStr) - 1]

print(reverse('The Tests Given in the Instructions'))
print(reverse('Hello World'))
