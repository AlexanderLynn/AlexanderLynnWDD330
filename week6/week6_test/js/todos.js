const form = document.getElementById("new-item-form");
const ul = document.getElementById("todo-list");
const button = document.getElementById("submitButton");
const input = document.getElementById("new-item");

let all = true;
let active = false;
let completed = false;

let itemsList = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : []

//Item Constructor Class
class todo {
  constructor(timestamp, content, completed = false){
    this.timestamp = timestamp;
    this.content = content;
    this.completed = completed;
  }
}

//Add new item to list
form.addEventListener("submit", function(e) {
  e.preventDefault();

  //Get Timestamp
  let today = new Date();
  let timestamp = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

  //Makes new item and pushes to array
  let item = new todo(timestamp, input.value);
  itemsList.push(item);
  input.value = "";
  console.log(itemsList);
  localStorage.setItem("items", JSON.stringify(itemsList));
  console.log(localStorage.getItem("items"));
  refresh();
})

//Reloads list
function refresh(firstTime) {
  //Removes old list
  while (ul.lastChild) {
    ul.removeChild(ul.lastChild);
  }
  //Redraws new list
  itemsList.forEach((item) => {
    makeItem(item);
  })
  let tempList = document.getElementsByTagName("li");
  if (active == true){
    for(i=0; i < tempList.length; i++)
      if (tempList[i].classList.contains("checked"))
      tempList[i].style.display = "none";
  }
  else if (completed == true){
    for(i=0; i < tempList.length; i++)
      if (!tempList[i].classList.contains("checked"))
      tempList[i].style.display = "none";
  }
}
function toggleAll() {
  all = true;
  active = false;
  completed = false;
  refresh();
}
function toggleActive() {
  all = false;
  active = true;
  completed = false;
  refresh();
}
function toggleCompleted() {
  all = false;
  active = false;
  completed = true;
  refresh();
}

//Make Item Function
const makeItem = (item) => {
  const li = document.createElement("li");
  li.textContent = item.content;
  ul.appendChild(li);
  if (item.completed == true)
    li.classList.add("checked");
  else
    li.classList.remove("checked");
}

//Complete Item Event Listener
document.getElementById("todo-list").addEventListener("click", function(e) {
  for(i = 0; i < itemsList.length; i++){
  if (itemsList[i].content == e.target.innerHTML)
    if (itemsList[i].completed == false)
      itemsList[i].completed = true;
    else
      itemsList[i].completed = false;
  }
  refresh();
});

//Clear Data Test Button
function clearData() {
  itemsList = [];
  refresh();
}