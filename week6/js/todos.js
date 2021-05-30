const form = document.getElementById("new-item-form");
const ul = document.querySelector("ul");
const button = document.getElementById("submitButton");
const input = document.getElementById("new-item");


let itemsList = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : {}

localStorage.setItem("items", JSON.stringify(itemsList));
const data = JSON.parse(localStorage.getItem("items"));

//Event Listeners
    //Intercepts form submission to add item and clear form
    form.addEventListener("submit", function(e) {
    e.preventDefault();

    itemsList.push(input.value);
    localStorage.setItem("items", JSON.stringify(itemsList));
    makeItem(input.value);
    input.value = "";
    })
    //Event listener to compelte todo
    document.getElementById("todo-list").addEventListener("click", function(e) {
        var listItem = e.target;
        listItem.classList.toggle("checked");
    });
    //Event listener to delete todo
    /*
    document.getElementById("todo-list").addEventListener("click", function(e) {
        var listItem = e.target;
        listItem.parentNode.removeChild(listItem);
    });
    */


//Function to make a new item and add to DOM
const makeItem = (content) => {
    const li = document.createElement("li");
    li.textContent = content;
    ul.appendChild(li);
}
const deleteItem = () => {
    
}


//Refresh Board
data.forEach((item) => {
  makeItem(item)
})


