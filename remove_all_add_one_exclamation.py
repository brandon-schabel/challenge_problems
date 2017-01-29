def remove(s):
    s = list(s)
    while "!" in s:
        s.remove("!")
    return (''.join(s)) + "!"
