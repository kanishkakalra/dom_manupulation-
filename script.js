const input  = document.getElementById('todo-in');
const add = document.getElementById('add');

const list = document.getElementById('todo-list');



add.addEventListener('click', (event)=>{
    event.preventDefault(); 
    const task = input.value.trim();
   
    if(task){
        const li = document.createElement('li');
        li.textContent = task;
        list.appendChild(li);

        const del = document.createElement('button');
     del.innerText= 'Delete';
     li.appendChild(del);

     del.addEventListener('click',()=>{
        li.remove();

        
    })
 
     
    
       
    }
     input.value =" "
   
    
});



