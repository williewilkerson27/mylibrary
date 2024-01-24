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
    render();
}

// the purpose of render function is to display the array into actual html, instead of just the console.
// the purpose of the for-loop is so it iterates through each book that exists
// libraryEl.innerHTML = "" makes it where it doesnt duplicate the books as it renders
function render() {
    let libraryEl = document.querySelector("#library");
    libraryEl.innerHTML = "";
    for ( let i=0; i < myLibrary.length; i++ ) {
        let book = myLibrary[i];
        let bookEl = document.createElement('div');
        bookEl.innerHTML = `<p>${book.title}</p>`;
// appendChild pushes the book to the div   
        libraryEl.appendChild(bookEl)
    }
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
    addBookToLibrary();
} )