function update(tasks) {
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
}

function load() {
  let list = [{
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

  if (JSON.parse(localStorage.getItem('tasks'))) {
    list = JSON.parse(localStorage.getItem('tasks'));
  }
  return list;
}

function changeStatus(checkbox, index) {
  const tasks = load();
  checkbox.addEventListener('change', function () {
    if (this.checked) {
      tasks[index].completed = true;
      update(tasks);
    } else {
      tasks[index].completed = false;
      update(tasks);
    }
  });
}

export { update, load, changeStatus };