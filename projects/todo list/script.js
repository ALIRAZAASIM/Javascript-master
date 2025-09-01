//create variables
let input = document.querySelector("#input");
let btn = document.querySelector(".button");
let clear = document.querySelector(".clear");
let taskList = document.querySelector("ul");

//function to clear all tasks
let clearAllTask = () => {
  taskList.innerHTML = "";
};

//function to add task
let addtask = () => {
  let task = input.value;
  if (task === "") return;

  let newitem = document.createElement("li");
  newitem.innerHTML = `
    <p>${task}</p>
    <div>
      <button class="done">
        <i class="fa-solid fa-check" style="color: green"></i>
      </button>
      <button class="delete">
        <i class="fa-solid fa-trash" style="color: red"></i>
      </button>
    </div>
  `;
  // attach delete functionality
  newitem.querySelector(".delete").addEventListener("click", () => {
    newitem.remove();
  });
  //ark as done
  newitem.querySelector(".done").addEventListener("click", () => {
    newitem.classList.toggle("completed");
  });

  taskList.appendChild(newitem);
};

//event listeners
btn.addEventListener("click", addtask);
clear.addEventListener("click", clearAllTask);
