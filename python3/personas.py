
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def say_hello(self):
        print('Hello, my name is {} and i am {} year old'.format(
            self.name,
            self.age
        ))


if __name__ == '__main__':
    person = Person('daniel', 12)

    print('Age: {}'.format(person.age))
    person.say_hello()
