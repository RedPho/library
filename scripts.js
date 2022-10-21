let htmlCard =  '<div class="col-sm-4">' +
                  '<div class="card">' +
                    '<div class="card-body">' +
                        '<h5 id="titleOfTheBook" class="card-title">Book title</h5>' +
                        '<span class="card-text">Author:</span>' +
                        '<p id="nameOfTheAuthor" class="card-text">AuthorName</p>' +
                        '<span class="card-text">Number of pages:</span>' +
                        '<p id="numberOfPages" class="card-text">NumberOfPages</p>' +
                        '<button id="is-readed" class="btn btn-info readedOrNot" style="margin-bottom: 7px;"></button>' +
                        '<button onclick="this.parentElement.parentElement.parentElement.remove()" class="btn btn-danger" style="margin-bottom: 7px;">Delete</button>' +
                    '</div>' +
                  '</div>' +
                '</div>'

let myLibrary = [];

class Book {
  constructor(title, author, pages, isReaded) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isReaded = isReaded;
  }
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
  let toggleButton = document.querySelector("#is-readed");
  if (myBook.isReaded == true) {
    toggleButton.innerText = "Readed: Yes"
  }
  else {
    toggleButton.innerText = "Readed: No"
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
  let buttons = document.querySelectorAll(".readedOrNot")
  buttons.forEach(toggleButton => {
    toggleButton.addEventListener("click", function() {
      if (toggleButton.innerText == "Readed: No") {
        toggleButton.innerText = "Readed: Yes"
      }
      else {
        toggleButton.innerText = "Readed: No"
      }
    })
  })
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

toggleButton.addEventListener("click", function(e) {
  if (toggleButton.innerText == "Readed: No") {
    toggleButton.innerText = "Readed: Yes"
  }
  else {
    toggleButton.innerText = "Readed: No"
  }
})