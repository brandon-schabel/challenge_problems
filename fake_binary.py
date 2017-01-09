def fake_bin(x):
    completedStr = ''
    for num in x:
        if int(num) < 5:
            completedStr += str(0)
        else:
            completedStr += str(1)
    return completedStr
