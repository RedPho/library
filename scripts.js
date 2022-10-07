let htmlCard =  '<div class="col-sm-4">' +
                  '<div class="card">' +
                    '<div class="card-body">' +
                        '<h5 id="titleOfTheBook" class="card-title">Book title</h5>' +
                        '<span class="card-text">Author:</span>' +
                        '<p id="nameOfTheAuthor" class="card-text">AuthorName</p>' +
                        '<span class="card-text">Number of pages:</span>' +
                        '<p id="numberOfPages" class="card-text">NumberOfPages</p>' +
                        '<button id="is-readed" class="btn btn-info" style="margin-bottom: 7px;"></button>' +
                        '<button onclick="this.parentElement.parentElement.parentElement.remove()" class="btn btn-danger" style="margin-bottom: 7px;">Delete</button>' +
                    '</div>' +
                  '</div>' +
                '</div>'

let myLibrary = [];

function Book(title, author, pages, isReaded) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isReaded = isReaded;
}

let hobbit = new Book("The Hobbit", "Tolkien", 310, true)
myLibrary.push(hobbit);
console.log(myLibrary);

let rings = new Book("The Fellowship of the Ring Hobbit", "Tolkien", 531, false)
myLibrary.push(rings);
console.log(myLibrary);

function addBookToLibrary(theBook) {
  myLibrary.push(theBook);
}

function addItemToTheDOM(myBook) {
  document.querySelector("#book-cards").innerHTML += htmlCard;
  document.querySelector("#titleOfTheBook").innerText = myBook.title;
  document.querySelector("#nameOfTheAuthor").innerText = myBook.author;
  document.querySelector("#numberOfPages").innerText = myBook.pages;
  if (myBook.isReaded == true) {
    document.querySelector("#is-readed").innerText = "Readed: Yes"
  }
  else {
    document.querySelector("#is-readed").innerText = "Readed: No"
  }
  
  document.querySelector("#titleOfTheBook").removeAttribute("id");
  document.querySelector("#nameOfTheAuthor").removeAttribute("id");
  document.querySelector("#numberOfPages").removeAttribute("id");
  document.querySelector("#is-readed").removeAttribute("id");
}

function updateDOM() {
  for (i = 0; i < myLibrary.length; i++) {
    addItemToTheDOM(myLibrary[i]);
  }
  myLibrary = [];
}

updateDOM();

function addBookToDOM() {
  let inputTitle = document.querySelector("#title").value;
  let inputAuthor = document.querySelector("#author").value;
  let inputPages = document.querySelector("#pages").value;
  let inputReaded = document.querySelector("#readed").checked;
  
  let newBook = new Book(inputTitle, inputAuthor, inputPages, inputReaded);
  addBookToLibrary(newBook);
  updateDOM();
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
  
}

let submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", addBookToDOM);