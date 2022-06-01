#count = [10, 20, 30, 40]

#for x in count:
 #   print(x)

#for num in range(6):
 #   print(num)
  #  if num >= 3:
   #     print(num*2)

num = int(input("Enter a number to generate its pattern = "))
#for i in range(0,num):
 #   for j in range(1,i + 1):
  #       print(j, end =  " ")
   # print()
i = 0
j = 1
while i in range(0, num):
    while j in range(1, i + 1):
        print(j, end = " ")
    print()