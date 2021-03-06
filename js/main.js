const links = [
    {
      label: "Week 1 Notes",
      url: "week1/index.html"
    },
    {
        label: "Week 2 Notes",
        url: "week2/index.html"
    },
    {
      label: "Week 3 Notes",
      url: "week3/index.html"
    },
    {
      label: "Week 4 Notes",
      url: "week4/index.html"
    },
    {
      label: "Week 5 Notes",
      url: "week5/index.html"
    },
    {
      label: "Week 6 Project: Todo",
      url: "week6/week6_test/index.html"
    },
    {
      label: "Week 7 Notes",
      url: "week7/index.html"
    },
    {
      label: "Week 8 Notes",
      url: "week8/index.html"
    },
    {label: "Week 9 Notes",
    url: "week9/index.html"
    },
    {
      label: "Week 10 Notes",
      url: "week10/index.html"
    },
    {
      label: "Weeks 11-14, Final Project. Desk Reservation Software",
      url: "weeks11-14/Files/index.html"
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