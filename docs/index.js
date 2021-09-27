import './styles.css';
import { addTodo, newTask } from './items.js';

const list = document.querySelector('ul');

const form = document.querySelector('.form');

form.addEventListener('submit', addTodo);

document.addEventListener('DOMContentLoaded', newTask());
list.addEventListener('change', newTask());