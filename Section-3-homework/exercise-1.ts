<<<<<<< HEAD
interface IUsers {
  name: string,
  age: number,
  occupation?: string
 }

const users: IUsers[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
  }
]



function logPerson (user: IUsers) {
  console.log(` - ${user.name}, ${user.age}`);
}

users.forEach(logPerson);
=======
interface IUsers {
  name: string,
  age: number,
  occupation?: string
 }

const users: IUsers[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
  }
]



function logPerson (user: IUsers) {
  console.log(` - ${user.name}, ${user.age}`);
}

users.forEach(logPerson);
>>>>>>> cf9ee380bf09cdeb3c7203ab9aaa8a6beaf446ed
