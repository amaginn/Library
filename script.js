const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
      return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`
    }
  };

const broKo = new Book('Brothers K','Dostoevsky','850', 'Have read');
  
console.log(broKo);
console.log(broKo.info())

function addBookToLibrary() {
    // get the inputs from the form and push them to the array
    myLibrary.push(broKo)
};

addBookToLibrary();

console.log(myLibrary);