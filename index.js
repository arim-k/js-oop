let person = { name: 'Mosh' };
// let objectBase = Object.getPrototypeOf(person);
// let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');

// console.log(descriptor);

Object.getPrototypeOf(myObj);

function Circle(radius) {
  this.radius = radius;
}

const circle = new Circle(1);
// for (let key in person) {
//   console.log(key);
// }

// console.log(Object.keys(person));
