#optional parameters

#def func(x = 8):
 #   return x**2

#call = func()
#print(call)

#def func(name,add = 5, freq = 9):
   #print(name*(freq + add))

#call = func('tim ')

#Static and Class Methods
#class person(object):
 #   population = 50
  #  def __init__(self, name, age):
   #     self.name = name
    #    self.age = age
    #@classmethod
    #def getPopulation(cls):
     #   return cls.population

    #@staticmethod
    #def isAdult(age = 5):
     #   return age >= 18

    #def display(self):
     #   print(self.name, ' is ', self.age, ' years old.')

#newPerson = person('tim', 18)

#print(person.isAdult())

#3 map functions
li = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

#def func(x):
 #   return x**x

#print (list(map(func, li)))
#newList = []
#for x in li:
 #   newList.append(func(x))

#print(newList)
#print([func(x) for x in li if x%2==0])

#4filter function basically filters

#def add7(x):
 #   return x+7

#def isodd(x):
#    return x%2 != 0

#a = [1,2,3,4,5,6,7,8,9,10]

#b = list(filter(isodd,a))
#print(b)
#c = list(map(add7,b))
#print(c)

#5lambda-anonymous function

#def func(x):
  #  func2 = lambda x: x + 5
 #   return func2(x)+85
#print(func(2))

#func3 = lambda x, y= 9: x**y
#print(func3(3))

#func = lambda
#lambda is used to create functions within functions
#a = [1,2,3,4,5,6,7,8,910]
#newList = list(map(lambda x: x+34, a))
#print(newList)


#6 Collections - datat types that store multiple objects
import collections
from collections import deque #import namedtuple #import Counter

#c = Counter('gallad')
#print(c)
#c = Counter(['a', 'b', 'a', 'c', 'c'])
#print(c)
#print(c.most_common(1))
#c =Counter({'a':1, "b":2})
#print(c)
#c=Counter(cats = 7, dogs = 9)
#print(c)
#print(list(c.elements()))

#c = Counter(a=4, b=2, c=0, d=-2)
#d = Counter(['a', 'b', 'b', 'c'])
#c.subtract(d)
#print(c)
#c.update(d)
#print(c)
#print(c+d)
#print(c-d)
#intersection print(c&d)
#union print(c|d)

#Point = namedtuple('Point', 'x y z')
#Point = namedtuple('Point', {'x': 0, 'y': 0, 'z': 0})
#newP = Point(3, 4, 5)
#print(newP.x, newP.y, newP.z)
#print(newP._asdict())
#print(newP._fields)
#newP = newP._replace(x=6)
#print(newP)

#d = deque("hello")
#d.append('4')
#d.appendleft(5)
#print(d)
#d.popleft()
##print(d)
#d.pop()
#print(d)
#d.clear()
#print(d)
#d.extend('456')
#print(d)
#d.extend('oge')
#print(d)
#d.extendleft('hey')
#print(d)
#d.rotate(-3)
#print(d)

#d = deque("hello", maxlen=5)
print(d)
d.append(1)
print(d)
d.extend([1,2,3])
print(d)