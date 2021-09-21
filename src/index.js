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

 
var newtodo = []


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
const storedInput = localStorage.getItem('')
const p = document.querySelector("p")
var li = document.createElement("li");

if(input){
  p.textContent = storedInput

}


input.addEventListener('input', word => {
  p.textContent = word.target.value
})

const savetoLocal = () => {
  localStorage.setItem('textinput', p.textContent )
  
}

btn.addEventListener('click', savetoLocal)



console.log(newtodo)