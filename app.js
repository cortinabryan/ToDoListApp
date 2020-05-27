const todoInputEl = document.querySelector(".todo__input");
const todoListEl = document.querySelector(".todo__list");
const todoItemEl = document.querySelector(".todo__item");

function addListItem() {
  todoInputEl.addEventListener("keypress", function(event) {
    if (event.keyCode === 13){
      console.log(todoInputEl.value)
      todoListEl.appendChild(todoInputEl.value)
    }
  })
}

function createListItem(text) {
  const newListElement = document.createElement("li");
  newListElement.textContent = text;
  return newListElement;
}

console.log(createListItem("do the laundry"));

addListItem();