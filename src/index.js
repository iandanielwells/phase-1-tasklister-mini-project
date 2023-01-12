

document.addEventListener("DOMContentLoaded", () => {
  
  const taskList = document.getElementById('tasks');
  const taskForm = document.getElementById('create-task-form');
  
  taskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskDescription = document.getElementById('new-task-description');
    
    //creating an li list item, 
    const newTask = document.createElement('li');
    newTask.textContent = taskDescription.value;

    //advanced deliverables for delete button

    const delBtn = document.createElement('button');
    delBtn.textContent = "Delete";

    const priority = document.querySelector('#priority');

    if (priority.value === 'High') {
      newTask.classList.add('red')

      } else if (priority.value === 'Medium') {
        newTask.classList.add('green')
        
        } else {
          newTask.classList.add('blue')}

    //for priority,  

    delBtn.addEventListener('click', () => {
      newTask.remove();
    })

    newTask.append(delBtn);
    
    taskList.append(newTask);

  

    // or taskList.append(newTask, delBtn) then delBtn will appear below the newTask
  
  })

});
