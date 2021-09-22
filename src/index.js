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

var ischeck;
const list = document.querySelector('ul');

tasks.forEach((item, i) => {
  const li = document.createElement('li');
  li.className = 'list-item';
  li.innerText = tasks[i].title;
  list.appendChild(li);
  const checkbox = document.createElement('INPUT');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.id = 'checkbox'
  li.appendChild(checkbox);
  checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        tasks[i].completed = true;
        window.localStorage.setItem('completed', JSON.stringify(tasks))
    } else {
        tasks[i].completed = false;
        window.localStorage.setItem('completed', JSON.stringify(tasks))
    }
  });
  ischeck = JSON.parse(window.localStorage.getItem('completed'));
});

console.log(ischeck)



const form = document.querySelector('form');

form.addEventListener('submit');
