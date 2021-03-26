// // OLD CLASS 

// const Animal = function(options) {
//   this.name = options.name
//   this.color = options.color
// }

// const cat = new Animal({ name: 'Mosh', color: 'brown' })

// console.log(cat);



// const animal = {
//   name: 'Animal',
//   age: 5,
//   hasTail: true
// }

class Animal {
  static type = 'ANIMAL'

  constructor(options) {
    this.name = options.name
    this.age = options.age
    this.hasTail = options.hasTail
  }

  voice() {
    console.log('I am Animal!')
  }
}


const animal = new Animal({
  name: 'Animal',
  age: 5,
  hasTail: true
})

class Cat extends Animal {
  static type = 'CAT'

  constructor(options) {
    super(options)
    this.color = options.color
  }

  voice() {
    super.voice()
    console.log('I am cat')
  }

  get ageInfo() {
    return this.age * 7
  }

  set ageInfo(newAge) {
    this.age = newAge
  }
}

const cat = new Cat({
  name: 'Cat',
  age: 7,
  hasTail: true,
  color: 'black'
})