import './styles.css';

const tasks = [
  {
    title:'hello', 
    completed: false, 
    index: 1
  },
  {
    title:'world',
    completed: false,
    index: 2},
  {
    title:'bye',
    completed: false,
    index: 3
  }]


const list = document.querySelector('ul')
  tasks.forEach((item, i)=>{
    var li = document.createElement("li");
    li.className = 'list-item';
    li.innerText = tasks[i].title
    list.appendChild(li)
    var checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    li.appendChild(checkbox)
  })

const input = document.querySelector('.input')
const btn = document.querySelector(".btn")
const li = document.createElement("li");

input.addEventListener('input', word => {
  li.textContent = word.target.value
})

const savetoLocal = () => {
  localStorage.setItem('textinput', li.textContent )
  list.appendChild(li)
}

btn.addEventListener('click', savetoLocal)