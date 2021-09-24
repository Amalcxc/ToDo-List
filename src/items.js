import { load, update} from "./dynamic-list";



const list = document.querySelector('ul');
const input = document.querySelector('.input')
const tasks = load();
const todoList = document.querySelector('ul')



function addTodo(e) {
  e.preventDefault();
  //Create list
  creatitem(input.value)
  const newTodo = document.createElement("li");
  newTodo.innerText = input.value;
  newTodo.className = 'list-item';
  list.appendChild(newTodo);
  input.value = "";
  //Create Completed Button
  const checkbox = document.createElement('INPUT');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.id = 'checkbox';
  newTodo.appendChild(checkbox);
  
  checkbox.addEventListener('change', function () {
    changeStatus(checkbox, tasks.length -1);
    console.log('hello')
  });
  
  // // Create trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = 'DELET';
  trashButton.className = 'trash-btn';
  newTodo.appendChild(trashButton)
}

function creatitem(task){
  const newtask = 
    { 'description': task,
      'index':  tasks.length +1,
      'completed': false}
  
  tasks.push(newtask)
  update(tasks);
}

function changeStatus(checkbox, index) {
  if (tasks[index].completed === true) {
    tasks[index].completed = false;
    update(tasks);  
  } else if(tasks[index].completed === false) {
    tasks[index].completed = true;
    update(tasks);
  }
}

tasks.forEach((item, i) => {
  const li = document.createElement('li');
  li.className = 'list-item';
  li.innerText = tasks[i].description;
  list.appendChild(li);
  const checkbox = document.createElement('INPUT');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = tasks[i].completed;
  checkbox.id = 'checkbox';
  li.appendChild(checkbox);
  checkbox.addEventListener('change', function () {
    changeStatus(checkbox, i);
  });
  const trashButton = document.createElement("button");
  trashButton.innerHTML = 'DELET';
  trashButton.className = 'trash-btn';
  li.appendChild(trashButton)
});

todoList.addEventListener("click", deleteitem);

function deleteitem(e){ 
  const item = e.target;
  console.log(item.parentElement)
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
    removeLocalTodos(todo);
  }
}

function removeLocalTodos(tasks) {
  if (localStorage.getItem("tasks") === null) {
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  console.log(tasks.children)
  const taskIndex = tasks.children;
  tasks.splice(tasks.indexOf(taskIndex), 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}





export{addTodo}