import Task from "./components/Task/index.js";
let element;
let input;
function runOnLoad() {
  // Create a container for us
  element = document.createElement("div");
  element.id = "container";
  document.body.appendChild(element);
  input = document.getElementById("taskText");
  // Handle adding a new task
  var addTaskButton = document.getElementById("addTask");
  addTaskButton.addEventListener("click", onClick);
}

function onClick() {
  console.log("clicked!");
  var string = input.value;
  if (string != "") {
    var newTask = new Task({
      content: input.value,
      done: false
    });

    // let strikeThrough = newTask.onClick.bind(newTask);
    element.appendChild(newTask.render());

  } else {
    let warning = document.createElement("div");
    warning.innerHTML = "Please enter a task before entering!";
    element.appendChild(warning);
  }
}

window.addEventListener("DOMContentLoaded", runOnLoad);
