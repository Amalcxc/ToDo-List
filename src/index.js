import './styles.css';
import { load, changeStatus } from './dynamic-list.js';
import {addTodo, NewTask} from './items.js';



const list = document.querySelector('ul');

const form = document.querySelector('.form')

form.addEventListener("submit", addTodo);





