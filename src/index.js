import './styles.css';

const tasks = [{
  title: 'first',
  completed: false,
  index: 1,
},
{
  title: 'second',
  completed: false,
  index: 2,
},
{
  title: 'third',
  completed: false,
  index: 3,
}];

const list = document.querySelector('ul');
tasks.forEach((item, i) => {
  const li = document.createElement('li');
  li.className = 'list-item';
  li.innerText = tasks[i].title;
  list.appendChild(li);
  const checkbox = document.createElement('INPUT');
  checkbox.setAttribute('type', 'checkbox');
  li.appendChild(checkbox);
});

const form = document.querySelector('form');

form.addEventListener('submit');
