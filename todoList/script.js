
var addTask = document.querySelector("#push");
var taskInput = document.querySelector("#newtask input");

addTask.onclick = function () {
  if (taskInput.value.trim().length === 0) {
    alert("Please Enter a Task");
  } else {
    var taskElement = document.createElement("div");
    taskElement.className = "task";

    var taskNameElement = document.createElement("span");
    taskNameElement.id = "taskname";
    taskNameElement.textContent = taskInput.value;

    var deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';

    taskElement.appendChild(taskNameElement);
    taskElement.appendChild(deleteButton);

    document.querySelector("#tasks").appendChild(taskElement);

    deleteButton.addEventListener("click", function () {
      taskElement.remove();
    });

    taskElement.onclick = function () {
      this.classList.toggle("completed");
    };

    taskInput.value = "";
  }
};

