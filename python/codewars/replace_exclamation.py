def replace_exclamation(s):
    for char in range(len(s)):
        #find all vowels
        if(s[char].lower() == 'a' or s[char].lower() == 'e' or
                           s[char].lower() == 'i' or s[char].lower() == 'o' or 
                           s[char].lower() =='u'):
            #replace any vowel with exlamation mark
            s = s.replace(s[char],'!')
    return s
