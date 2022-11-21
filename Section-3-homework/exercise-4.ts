
/*
Опишіть клас таким чином, щоб він міг працювати з динамічними типами данних. Для цього використайте generics

  - Метод get повинен повертати масив з описаним типом на основі переданого generic.
    Тобто якщо в клас передано generic string, то метод має повертати string[]

  - Метод add повинен приймати 2 аргументи:
    el: елемент який потрібно додати до elements
    type: куди саме додати елемент. Може бути або append, або prepend. Дефолтне значення - append

  - Метод contains приймає аргумент predicate, який є функцією та перевіряє чи існує елемент в масиві elements.
    Приклад виконання дивіться нижче

  - Метод delete приймає аргумент predicate, який є функцією та видаляє елемент з масива elements.
    Приклад виконання дивіться нижче
*/
interface IUser {
  id: number
  name: string
}

type AddType = 'appent' | 'prepend';

class Collection <T> {
  private elements: T[] = [];

  constructor (elements= []) {
    this.elements = elements
  }

  // constructor (elements:T[]= []) {
  //   this.elements = elements
  // }

  get () :T[] {
    return this.elements;
  }
  
  add (el: T, type?: AddType) {  
  	if (type as 'append') {
    	this.elements.push(el);
    } else { 
     	this.elements.unshift(el)
    } 
  }
   
  contains (predicate: (el:T) => T) {
    if (this.elements.find(predicate)) {
      return true
    } else {
      return false
      }
    }

  remove (predicate:(el: T) => boolean): T[] {
    return this.elements.filter(predicate);
  }
}

const stringCollection = new Collection()
stringCollection.add(['Hello, World!'])   // no valid
stringCollection.contains(el => el === 'Hello, TS')

const strings = stringCollection.get()

const userCollection = new Collection<IUser>()
userCollection.add({ id: 1, name: 'Viktor' })
userCollection.remove(el => el.id === 1)
const users = userCollection.get()

export {
  strings,
  users
}