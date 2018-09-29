// Constructor function.
const BooksType = function (pages,bookTitle, author, numOfBooks) {
  this.checkout = false;
  this.pages = pgs;
  this.bookTitle = bookTitle;
  this.author = author;
  this.grade = grade;
  this. publisher = publisher;
  this.numOfBooks = 0

};

// prototype method

Books.prototype.borrowed = function() {
  this.borrowedBookNum++
}

// create a book object

const fictonBook = new BooksType(345,"All the Days thet Came Before","Brice Johnson",1);
const mathBook = new BooksType(655, "Calculus", "Professer SmartyPatz",5);
const comicBook = new BooksType(36,,"Batman 40th", "Jack Curby", 1);
const scienceBook = new BooksType();
const pictureBook = new BooksType(145, "Street Photography", "Sam Smith", 2);


//iterating through the object

for(let key in fictonBook){
  console.log(key);
  //or console.log(fictionBook[key]);
  //or console.log(key, fictionBook[key])
}
