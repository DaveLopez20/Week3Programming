const name = "Apollo";

function adder(num1, num2) {
    console.log(num1 + num2);
}

adder(5,10);

let x = 123;
document.getElementById("demo").innerHTML =
  x.toString() + "<br>" +
   (123).toString() + "<br>" +
   (100 + 23).toString();


   // Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create 2 Person objects
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  
  // Add nationality to first object
  myFather.nationality = "English";
  
  // Display nationality 
  document.getElementById("demo").innerHTML =
  "My father is " + myFather.nationality; 