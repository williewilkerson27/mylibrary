const myLibrary = [];

function Book(title, author, page, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}

// this allows us to obtain the book info the user inputs
function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let page = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    let newBook = new Book(title, author, page, read);
    myLibrary.push(newBook)
    console.log(myLibrary)
}

// we want the user to see the form after new book has been clicked
let newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener('click', function() {
    let newBookForm = document.querySelector('#new-book-form');
    console.log(newBookForm)
    newBookForm.style.display = 'block';
})

// this is our eventhandler for new-book-form
// Since submit tries to go straight to the back end(we dont have yet), we need to preventDefault() so it doesnt do that.
document.querySelector('#new-book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Hello Im working')
    addBookToLibrary();
} )