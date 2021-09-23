import './styles.css';
import { update, load, changeStatus} from './storage.js';

const tasks = load();
const list = document.querySelector('ul');

tasks.forEach((item, i) => {
  const li = document.createElement('li');
  li.className = 'list-item';
  li.innerText = tasks[i].title;
  list.appendChild(li);
  const checkbox = document.createElement('INPUT');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = tasks[i].completed;
  checkbox.id = 'checkbox';
  li.appendChild(checkbox);
  changeStatus(checkbox, i);
});

const form = document.querySelector('form');

form.addEventListener('submit');
