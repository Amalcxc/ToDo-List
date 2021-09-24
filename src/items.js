import { load, update} from "./dynamic-list";



const list = document.querySelector('ul');
const input = document.querySelector('.input')
const tasks = load();



function addTodo(e) {
  //Prevent natural behaviour
  e.preventDefault();
  //Create list
  creatitem(input.value)
 
  const newTodo = document.createElement("li");
  newTodo.innerText = input.value;
  newTodo.className = 'list-item';
  //Save to local - do this last
  //Save to local
  
  // 
  // //
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
  
  //Create trash button
  // const trashButton = document.createElement("button");
  // trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  // trashButton.classname = "trash-btn";
  // trashButton.className = 'list-item';
  // list.appendChild(trashButton);

}

function creatitem(task){
  const newtask = 
    { 'description': task,
      'index':  tasks.length +1,
      'completed': false}
  
  tasks.push(newtask)
  update(tasks);
}


console.log(tasks)

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
});


export{addTodo}