const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");

const addTodo = () => {
  inputValue = todoInput.value;
  if (inputValue.trim().length > 0) {
    // creating li
    let li = document.createElement("li");
    li.innerHTML = inputValue;
    li.classList.add("mt-4", "fw-bold");
    // appending li
    todoList.appendChild(li);
    //   creating EDIT button
    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit Todo";
    // applying bootstrap classes
    editButton.classList.add("btn", "btn-info", "me-2", "ms-2");
    li.appendChild(editButton);
    // creating delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Done Todo";
    // applying bootstrap classes
    deleteButton.classList.add("btn", "btn-warning");
    li.appendChild(deleteButton);
    //   adding eventlistener
    deleteButton.addEventListener("click", () => {
      deleteTodo(li);
    });
    editButton.addEventListener("click", () => {
      editTodo(li);
    });
    // clearing input value
    todoInput.value = "";
    // enabling delete button
    if (todoList.childNodes.length > 0) {
      const deleteButton = document.getElementById("deleteButton");
      deleteButton.addEventListener("click", () => {
        deleteAll();
      });
      deleteButton.hidden = false;
    } else {
      const deleteButton = document.getElementById("deleteButton");
      deleteButton.hidden = true;
    }
  } else {
    alert("invalid input");
  }
};

const deleteTodo = (li) => {
  li.remove();
  const deleteButton = document.getElementById("deleteButton");
  todoList.childNodes.length > 0
    ? (deleteButton.hidden = false)
    : (deleteButton.hidden = true);
};

const editTodo = (li) => {
  // getting the value of todo and putting it in the input
  let todoValue = li.childNodes[0].nodeValue;
  console.log("🚀 ~ file: app.js:62 ~ editTodo ~ todoValue:", todoValue);
  todoInput.value = todoValue;
  // enabling save button
  const saveButton = document.getElementById("saveButton");
  saveButton.hidden = false;
  // disabling the addTodo button
  todoButton = document.getElementById("todoButton");
  todoButton.style.display = "none";

  saveButton.addEventListener("click", () => {
    li.childNodes[0].nodeValue = todoInput.value;
    saveButton.hidden = true;
    todoButton.style.display = "inline-block";
    todoInput.value = "";
  });
};

const deleteAll = () => {
  const restore = todoList.innerHTML;
  // console.log("🚀 ~ file: app.js:80 ~ deleteAll ~ restore:", restore);
  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild);
  }
  const deleteButton = document.getElementById("deleteButton");
  deleteButton.hidden = true;
  // console.log(
  //   "🚀 ~ file: app.js:87 ~ deleteAll ~ todoList.firstChild:",
  //   todoList.firstChild
  // );
  if (!todoList.firstChild) {
    const restoreButton = document.getElementById("restore-button");
    restoreButton.hidden = false;
    restoreButton.addEventListener("click", () => {
      todoList.innerHTML = restore;
      console.log(
        "🚀 ~ file: app.js:95 ~ restoreButton.addEventListener ~ restore:",
        restore
      );
      restoreButton.hidden = true;
      deleteButton.hidden = false;
    });
  }
};
