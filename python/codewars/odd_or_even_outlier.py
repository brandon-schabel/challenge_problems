def find_outlier(integers):
    oddIndex = []
    evenIndex = []
    for num in range(0, len(integers)):
        #iterate and use module to determine if it is even or odd, then
        #log the index
        if integers[num] % 2 == 0:
            evenIndex.append(num)
        else:
            oddIndex.append(num)

    #whichever array has a length of 1, return that array        
    print(evenIndex)
    print(oddIndex)
    if len(evenIndex) == 1:
        return integers[evenIndex[0]]
    else:
        return integers[oddIndex[0]]

print(find_outlier([2,6,8,10,3]))
print(find_outlier([-7640712, 6214374, 5322332,
                    5853326, 7202334, 1889870,
                    -3960436, 7741230, 1936744,
                    -6805460, 6631582, 8839460,
                    -2633644, -3243078, 7589940,
                    -1293810, -5415100, -637622,
                    7054444, -7598266, -5159126,
                    8906768, 4344326, -3550688,
                    -3547598, 2933778, 7801714,
                    3878482, 3735980, -1705276,
                    -7355292, 6615344, 2472496,
                    -332218, -4445938, 3612850,
                    4384194, -5501031, -4856592,
                    -2987172, -8279706, 8747916,
                    -3375492, -8572024, 3844590,
                    6825762, 435724, 820702]))
