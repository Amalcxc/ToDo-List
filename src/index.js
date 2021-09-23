import './styles.css';
import {update} from './storage.js';

const tasks = JSON.parse(window.localStorage.getItem('completed')); 

const list = document.querySelector('ul');

tasks.forEach((item, i) => {
  const li = document.createElement('li');
  li.className = 'list-item';
  li.innerText = tasks[i].title;
  list.appendChild(li);
  const checkbox = document.createElement('INPUT');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = tasks[i].completed
  checkbox.id = 'checkbox'
  li.appendChild(checkbox);
  checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        tasks[i].completed = true; 
        update(tasks)
    } else {
        tasks[i].completed = false;
        update(tasks)
    }
  });
});
console.log(tasks)
const form = document.querySelector('form');

form.addEventListener('submit');
