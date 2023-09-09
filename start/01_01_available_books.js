// Write your code here
/* FUNCTION COMPONENT START
//Step 1: start by solving problem as a function
function Book(title, author, ISBN, numCopies) {
  this.title = title;
  this.author = author;
  this.ISBN = ISBN;
  this.numCopies = numCopies;
}
//Step 2: declare getAvailability function on prototype; Declare the function so each instance doesn't create a new function.
Book.prototype.getAvailability = function() {
  if (this.numCopies === 0) {
    return "out of stock";
    // console.log("out of stock");
  } else if (this.numCopies < 10) {
    return "low stock";
    // console.log("low stock");
  } return "in stock";
    // console.log("in stock")
};  
//don't need to create a new instance of function each a new object is made, declare on prototype and each book can use that prototype's function

//Step 3: same process for sell and restock functions 
Book.prototype.sell = function(numCopiesSold = 1) {
  this.numCopies -= numCopiesSold;
}
Book.prototype.restock = function(numCopiesStocked = 5) {
  this.numCopies += numCopiesStocked;
}

//Step 4: test
const BookTest = new Book("Title", "Author", 123456, 5);
console.log(BookTest.getAvailability());
console.log(BookTest.numCopies);
BookTest.restock(12);
console.log(BookTest.getAvailability());
console.log(BookTest.numCopies);
BookTest.sell(17);
console.log(BookTest.getAvailability());
console.log(BookTest.numCopies);
FUNCTION COMPONENT END*/

//Transition into creating a class component from function component
//Step 1: constructor is blueprint for book
class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  //Step 3: getter function to retrieve the book's availability
  get availability() {
    return this.getAvailability();
  }

  getAvailability() { //Step 2: function within the class "encapsulation"
    if (this.numCopies === 0) {
        return "out of stock";
      } else if (this.numCopies < 10) {
        return "low stock";
      } return "in stock";
    }

  //Step 4: add sell and restock functions within class
  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }
  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
};
const BookTest = new Book("Title", "Author", 123456, 5);