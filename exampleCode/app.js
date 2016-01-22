//capital names in constructor functions
function Person(name, height, hair, age) {
  this.title = name;
  this.height = height;
  this.hair = hair;
  this.age = age;

}
  Person.prototype.sayHello = function(who) {
    console.log("Hello " + who + "!!");
  };
var sam = new Person("Sam", 72, "brown", 26);

// var sam = {
//   height: 72,
//   hair: "brown",
//   age: 26,
//   name: "Sam",
// };
// var erin = {
//   height: 62,
//   hair: "brown",
//   age: 32,
//   name: "Erin",
// };
// var daniel = {
//   height: 47,
//   hair: "brown",
//   age: 27,
//   name: "Daniel",
// };
