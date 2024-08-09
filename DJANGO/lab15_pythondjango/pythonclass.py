"""
Zaiqiang Li
August 8th, 2024 || Python  Classes
"""

print("===== Example 1: Class Definition =====")
class MyClass:
    x = 5

#calling class MyClass
myclass1 = MyClass()
print("The complete class ", myclass1)
print("Propert of MyClass ", myclass1.x)

print("===== Example 2: Initialized a Class =====")
class Person:
    #initialize class properties
    def __init__(self, name, age):
        self.name = name
        self.age = age

        #set a class property
        self.luckynumber = 13

    #return string
    def __str__(self):
        return f"User {self.name} is {self.age} years old."
    
    #method
    def mymethod(self):
        print(f"{self.name}'s lucky number is {self.luckynumber}.")

#create an object of class Person
user1 = Person("Ann", 23)

print(f"Result --> {user1}")
user1.mymethod()
print(f"Class property --> {user1.luckynumber}")

#modify class property's value
user1.age = 28
print(f"Result --> {user1}")

#empty class
class Schedule:
    pass

print("\n===== Example 3: Class with Adjustable Methods =====")
class Number:
    def __init__(self, num):
        self.num = num
    
    #accessible property
    num_symbol = '$'

    #define a method to double the number
    def doublenumber(self):
        self.num = self.num * 2
    
    #return string of the class
    def __str__(self):
        return f"The final number is {self.num}."

#create an object of class Number
n1 = Number(12)

#print the object of class Number
print(f"Object of Class Number --> {n1}")

#call method doublenumber()
n1.doublenumber()

#print the object of class Number
print(f"Object of Class Number --> {n1}")

#call method doublenumber()
n1.doublenumber()

#print the object of class Number
print(f"Object of Class Number --> {n1}")

print("\n===== Example 4: Class with Private Property =====")
class Chair:
    def __init__(self, height, width, length):
        self.height = height
        self.width = width
        self.length = length
        self.totaldimension = 0
        self.shippingcostfee = 0.2
        self.totalshipping = 0

    #accessible 'private' property
    _chair_color = 'brown'

    #method to calculate the total dimension
    def total_dimension(self):
        return self.height * self.length * self.width

    #method to calculate the total shipping cost
    def total_shipping(self):
        return self.shippingcostfee * self.totaldimension
    
    def __str__(self):
        return f"The total shipping cost for the {self._chair_color} chair is ${self.total_dimension()}"
    
#create an object of the class
chair1 = Chair(3, 4, 5)

#print the object
print(f"Result for {chair1._chair_color} chair with dimensions {chair1}.")