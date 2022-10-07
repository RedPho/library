let htmlCard =  '<div class="col-sm-4">' +
                  '<div class="card">' +
                    '<div class="card-body">' +
                      '<h5 id="titleOfTheBook" class="card-title">Book title</h5>' +
                        '<span class="card-text">Author:</span>' +
                          '<p id="nameOfTheAuthor" class="card-text">AuthorName</p>' +
                          '<span class="card-text">Number of pages:</span>' +
                          '<p id="numberOfPages" class="card-text">NumberOfPages</p>' +
                          '<button class="btn btn-info isReaded">Readed: No</button>' +
                          '<button class="btn btn-danger">Delete</button>' +
                    '</div>' +
                  '</div>' +
                '</div>'

let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

let hobbit = new Book("The Hobbit", "Tolkien", 310)
myLibrary.push(hobbit);
console.log(myLibrary);

function addBookToLibrary(theBook) {
  myLibrary.push(theBook);
}

function addItemToTheDOM(myBook) {
  document.querySelector("#book-cards").innerHTML += htmlCard;
  document.querySelector("#titleOfTheBook").innerText = myBook.title;
  document.querySelector("#nameOfTheAuthor").innerText = myBook.author;
  document.querySelector("#numberOfPages").innerText = myBook.pages;
  document.querySelector("#titleOfTheBook").removeAttribute("id");
  document.querySelector("#nameOfTheAuthor").removeAttribute("id");
  document.querySelector("#numberOfPages").removeAttribute("id");
}

for (i = 0; i < myLibrary.length; i++) {
  addItemToTheDOM(myLibrary[i]);
}
