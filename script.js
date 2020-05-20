//Grab dom elements
const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const richestPeople = [
  "Jeff Bezos",
  "Bill Gates",
  "Warren Buffett",
  "Bernard Arnault",
  "Carlos Slim Melu",
  "Amanico Ortega",
  "Larry Ellison",
  "Mark Zuckerberg",
  "Michael Bloomberg",
  "Larry Page",
];
//Sotre list itmes
const listItems = [];

let dragStartIndex;

createList();

//Insert list items into DOM
function createList() {
  [...richestPeople]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((person, index) => {
      const listItme = document.createElement("li");

      listItme.setAttribute("data-index", index);

      listItme.innerHTML = `
    <span class="number">${index + 1}</span>
    <div class="draggable" draggable="true">
    <p class="person-name">${person}</p>

    <i class="fa fa-grip-lines"></i>
    
    </div>
    `;

      listItems.push(listItme);

      draggable_list.appendChild(listItme);
    });
}
