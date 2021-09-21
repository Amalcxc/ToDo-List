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
    li.innerText = tasks[i].title
    list.appendChild(li)
    var checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    li.appendChild(checkbox)
    
  })

  

