let newTask = document.querySelector('#new-task')
let form = document.querySelector('form')
let todoUl = document.querySelector('#items')
let completeUl =document.querySelector('.complete-list ul')

 const completeTask =(task)=>{
        let li = document.createElement('li')
        let checkbox = document.createElement('input')
        let label = document.createElement('label')
        label.innerText =task;
        checkbox.type ="checkbox"
        li.appendChild(checkbox);
        li.appendChild(label)
        return li;
 }
  const addTask = (event)=>{
    event.preventDefault();
    let listItem = completeTask(newTask.value)
    todoUl.appendChild(listItem);
    newTask.value =""


  }
  form.addEventListener('submit',addTask)