<<<<<<< HEAD
interface IUser {
  name: string
  age: number
  occupation: string
}

interface IAdmin {
  name: string
  age: number
  role: string
}

type TPerson = IUser | IAdmin

const persons: TPerson[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  {
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator'
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
  },
  {
    name: 'Bruce Willis',
    age: 64,
    role: 'World saver'
  }
]

function logPerson (user: TPerson) {
  console.log(` - ${user.name}, ${user.age}`)
}

persons.forEach(logPerson);

export {
  persons,
  logPerson
}
=======
interface IUser {
  name: string
  age: number
  occupation: string
}

interface IAdmin {
  name: string
  age: number
  role: string
}

type TPerson = IUser | IAdmin

const persons: TPerson[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  {
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator'
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
  },
  {
    name: 'Bruce Willis',
    age: 64,
    role: 'World saver'
  }
]

function logPerson (user: TPerson) {
  console.log(` - ${user.name}, ${user.age}`)
}

persons.forEach(logPerson);

export {
  persons,
  logPerson
}
>>>>>>> cf9ee380bf09cdeb3c7203ab9aaa8a6beaf446ed
