const name = "Apollo";

const youtuber = 'VanossGaming';

function toUpper(text) {
 const upperCased = text.toUpperCase();
 console.log(text);

}
toUpper(youtuber);

function adder(num1, num2) {
    console.log(num1 + num2);
}

adder(5,20);

let x = 640;
document.getElementById("demo").innerHTML =
  x.toString() + "<br>" +
   (640).toString() + "<br>" +
   (600 + 40).toString();


   // This is the function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create the objects of the persons
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  
  // Add nationality to first object
  myFather.nationality = "Mexican-American";
  
  // This is the nationality 
  document.getElementById("demo").innerHTML =
  "My father is " + myFather.nationality; 

  function myFunction(a, b) {
    return a * b;
  }
  document.getElementById("demo").innerHTML = myFunction(10, 2); 


