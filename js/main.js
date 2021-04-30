const links = [
    {
      label: "Week 1 Notes",
      url: "week1/index.html"
    },
    {
        label: "Week 2 Notes",
        url: "week2/index.html"
    }
  ]
function listPages() {
    let list = document.getElementById("pageList");
    for (i=0; i < links.length; i++) {
        let listItem = document.createElement("li");
        let link = document.createElement("a");
        link.setAttribute("href", links[i].url);
        link.innerHTML = links[i].label
        listItem.appendChild(link);
        list.appendChild(listItem);
    }
}