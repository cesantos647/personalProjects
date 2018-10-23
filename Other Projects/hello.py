
#This program says hello and asks for my name
print(str(int(1)) + "Hello")
print('Hello World!')
print('What is your name?')
myName = input()
print('How old are you?')
myAge = input()
print('It is good to meet you, ' + str(myName) + '. The length of your name is ' + str(len(myName)) + '. You will be ' + (str(int(myAge) + 1)) + ' in a year.')



#This program explores if/else statements
print('myAge')
myAge = float(input())
print('myName')
myName = str(input())

if myAge > 15:
    print('Woo!')
    if myName == 'no':
        print('non')
    else:
        print('oui')
else:
    print('Not Woo?')
print('done')



total = 0
print('Last Number')
terminalNum = int(input()) + 1
for i in range(terminalNum):
    total = total + terminalNum
print(total)

def calc(name):
    if name == 10:
        name = name + 10
        print(name)
    try:
        return 15
    except ValueError:
        print('Please give a number')

calc(10)


import sys
print('Hello')
sys.exit()
print('Bye')





