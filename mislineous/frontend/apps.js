// let Student1 = {
//   name : "Adam",
//   age : 63,
//   marks : 98,
//   getMarks : function () {
//     return this.marks;
//   }
// }

// let Student2 = {
//   name : "rahul",
//   age : 25,
//   marks : 95,
//   getMarks : function () {
//     return this.marks;
//   }

// }

// let Student3 = {
//   name : "ava",
//   age : 26,
//   marks : 90,
//   getMarks : function () {
//     return this.marks;
//   }
// }



// factory function 

// function personMaker(name , age) {
//   const Person = {
//     name : name,
//     age : age,
//     talk() {
//     console.log(`Hi my name is ${this.name}`);
//     }
//   }

//   return Person;
// }


// Constuructor = does not return anything and start with caital laters 

// function Person(name , age ) {
//   this.name = name ;
//   this.age = age ;
//   console.log(this);
// }

// Person.prototype.talk = function() {
//   console.log(`Hi, my name is ${this.name}`);
// }

// class 


// class Person  {
// constructor  (name , age) {
//   this.name = name;
//   this.age = age;
// }
// talk() {
//   console.log(`Hi my name is ${this.name}`);
// }
// }

// let p1 = new Person("adam",34);
// let p2 = new Person("suraj",24);


// Inheritamce 

class Person{
  constructor(name , age ) {
    console.log("Person class constructor");
    this.name = name;
    this.age = age;
  }
   talk() {
    console.log(`Hi my name is ${this.name}`);
  }
}

class Student extends Person{
  constructor (name , age , marks) {
    console.log("Student class constructor");
    super(name , age) // Parent Calss constructor being called
    this.marks = marks;
  }
}

let st1 = new Student("Suraj",27,98);

class Teacher extends Person{
  constructor (name , age , subject) {
    super(name , age);
    this.subject = subject;
  }
}

let t1 = new Teacher("vikas",23,"math");

// let p1 = personMaker("adam",34);
// let p2 = personMaker("suraj",24);
