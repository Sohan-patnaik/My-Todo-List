showTime();
getDay();

function themeCustom(){

}
function themeClassic(){

}
const inputbox = document.getElementById("todo_input");
const listContainer = document.getElementById("list_container");

function addTask() {
  if (inputbox.value === " ") {
    alert("So you do not have any work to do");
  } else {
    var li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputbox.value = " ";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function getDay() {
  var days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  document.getElementById("btn1").innerHTML = days[new Date().getDay()];
}
function showTime() {
  var time = new Date().toLocaleTimeString();
  document.getElementById("btn2").innerHTML = time;
  setInterval(showTime, 1000);
}
function enterr() {
  inputbox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
}
enterr();
