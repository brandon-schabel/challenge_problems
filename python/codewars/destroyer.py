'''
items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for index, item in enumerate(items):
    if not (item % 2):
        items[index] = None
'''

     
def destroyer(input_sets):
    print(len(input_sets))
    alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ")
    '''for i in input_sets:
        print(i)'''
    #for index, item in enumerate(alphabet):

destroyer({'A', 'b'}, {'C', 'd'})
