function update(tasks) {
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
}

function load() {
  let list = [];

  if (JSON.parse(localStorage.getItem('tasks'))) {
    list = JSON.parse(localStorage.getItem('tasks'));
  }
  return list;
}

export { update, load };