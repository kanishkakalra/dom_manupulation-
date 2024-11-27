const inpu = document.getElementById('todo-in');
const add = document.getElementById('add');
//const del = document.getElementById('del');
const list = document.getElementById('todo-list');


add.addEventListener('click',(event)=>{
 event.preventDefault();
  const task = inpu.value.trim();
  
  if(task){
 
  const li = document.createElement('li');
  li.textContent = task;
  list.appendChild(li);

   const del = document.createElement('button');
   del.innerHTML='Delete';
   li.appendChild(del)
  del.addEventListener('click',()=>{
    li.remove();

  })

  } 
  inpu.value = '';
})
