def remove_exclamation_end(s):
    #convert to list, always convert string to list and work that way when possible
    s = list(s)
    
    #while the last char is '!' remove it from the last
    while(s[len(s)-1] == '!'):
        s.pop(len(s)-1)
    return ''.join(s)

