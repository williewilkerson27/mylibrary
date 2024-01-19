const myLibrary = [];

function book() {

}

function addBookToLibrary() {
    
}

// we want the user to see the form after new book has been clicked
let newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener('click', function() {
    let newBookForm = document.querySelector('#new-book-form');
    console.log(newBookForm)
    newBookForm.style.display = 'block';
})