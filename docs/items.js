import { load, update } from './dynamic-list.js';

const list = document.querySelector('ul');
const input = document.querySelector('.input');
const tasks = load();

function creatitem(task) {
  const newtask = {
    description: task,
    index: tasks.length + 1,
    completed: false,
  };

  tasks.push(newtask);
  update(tasks);
}

function changeStatus(checkbox, index) {
  if (tasks[index].completed === true) {
    tasks[index].completed = false;
    update(tasks);
  } else if (tasks[index].completed === false) {
    tasks[index].completed = true;
    update(tasks);
  }
}

function addTodo(e) {
  e.preventDefault();
  // Create list
  creatitem(input.value);
  const newTodo = document.createElement('li');
  newTodo.innerText = input.value;
  newTodo.className = 'list-item';

  list.appendChild(newTodo);
  input.value = '';
  // Create Completed Button
  const checkbox = document.createElement('INPUT');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.id = 'checkbox';
  newTodo.appendChild(checkbox);

  checkbox.addEventListener('change', () => {
    changeStatus(checkbox, tasks.length - 1);
  });

  // // Create trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = 'DELET';
  trashButton.className = 'trash-btn';
  newTodo.appendChild(trashButton);

  // // Create edit button
  const editButton = document.createElement('button');
  editButton.innerHTML = 'edit';
  editButton.className = 'edit-btn';
  newTodo.appendChild(editButton);
  window.location.reload();
}

function newTask() {
  list.innerHTML = '';
  tasks.forEach((item, i) => {
    const li = document.createElement('li');
    li.className = 'list-item';
    li.innerText = tasks[i].description;
    li.id = i;
    list.appendChild(li);
    const checkbox = document.createElement('INPUT');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = tasks[i].completed;
    checkbox.id = 'checkbox';
    li.appendChild(checkbox);
    checkbox.addEventListener('change', () => {
      changeStatus(checkbox, i);
    });
    const trashButton = document.createElement('button');
    trashButton.innerText = 'DELET';
    trashButton.className = 'trash-btn';
    li.appendChild(trashButton);

    // // Create edit button
    const editButton = document.createElement('button');
    editButton.innerText = 'edit';
    editButton.className = 'edit-btn';
    li.appendChild(editButton);

    editButton.addEventListener('click', (event) => {
      const newTask = prompt('enter');
      const newId = event.target.parentNode.getAttribute('id');
      tasks[newId].description = newTask;
      update(tasks);
      const anotherT = document.querySelector(`li[id="${newId}"]`);
      anotherT.innerHTML = newTask;
      window.location.reload();
    });
  });
}

function removeLocalTodos(tasks) {
  if (localStorage.getItem('tasks') === null) {
    // local
    tasks.sort((a, b) => a.index - b.index);
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  const taskIndex = tasks.children;
  tasks.splice(tasks.indexOf(taskIndex), 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteitem(e) {
  const item = e.target;
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    todo.remove();
    removeLocalTodos(todo);
  }
}

list.addEventListener('click', deleteitem);

const clearAll = document.querySelector('.clear');

function clear() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  const notCompletedTodos = tasks.filter((x) => x.completed === false);
  tasks = notCompletedTodos;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  window.location.reload();
  
}
clearAll.addEventListener('click', clear);

export { addTodo, newTask };



