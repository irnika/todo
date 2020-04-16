const todos = [
  { title: "Задача 1", description: "Сделать что-то", completed: false }, // 0
  { title: "Задача 2", description: "Сделать что-то", completed: true }, // 1
  { title: "Задача 3", description: "Сделать что-то", completed: false } // 2
];

console.log("-------1 задание-----------")

function addTodo(title, description) {
  todos.push({ title: title, description: description, completed: false }) 
}

addTodo("Задача 4", "Сделать что-то")
console.log(todos)


//---------------------
console.log("-------2 задание-----------")

function toggleTodo(index) {
  if (todos[index].completed){
      todos[index].completed = false
      }
  else{todos[index].completed = true}
}

toggleTodo(3)
console.log(todos)


//---------------------
console.log("-------3 задание-----------")

function deleteTodo(index) {
  todos.splice(index, 1)
}

deleteTodo(1)
console.log(todos)


//--------------------------
console.log("-------4 задание-----------")

function updateTodo(index, todo) {
if(todo.title){
  todos[index].title = todo.title
}
   if(todo.description){
  todos[index].description = todo.description
}  
}

updateTodo(2, {title: "Новый заголовoк задачи", description: "Новое описание задачи"})
console.log(todos)


//----------------------
console.log("-------5 задание-----------")

function filterTodos(filter) {
  if (filter === 'active'){
   
    var active = todos.filter(function(active) {
  return !active.completed
    })
    console.log("активные задачи", active)     
  }
  if(filter === 'completed'){
    var completed = todos.filter(function(completed) {
  return completed.completed;
  })
    console.log("выполненные задачи", completed)
    }
    if(filter === 'all'){
    console.log("все задачи", todos)
  } 
}
  
filterTodos('active')

filterTodos('completed')

filterTodos('all')



//-------------------------

console.log("-------6 задание-----------")

function searchTodos(search) {
  for (let i = 0; i< todos.length; i++ ){
   
     if(todos[i].title.includes(search)){
        console.log(todos[i].title)
       todos.splice(i, 1)
       };
  }
    console.log(todos)
  } 
  
  searchTodos(2)


  //-----------------------

  console.log("-------7 задание-----------")

  function toggleTodos(completed) {
    for (let i = 0; i< todos.length; i++ ){
     
       if(todos[i].completed !== completed )
        {
          todos[i].completed = completed
        }
    }
  }
  
  toggleTodos(true)
  console.log(todos)


  //-------------------------
  console.log("-------8 задание-----------")

  function clearCompletedTodos() {
    for (let i = 0; i < todos.length; i++ ){
     
       if(todos[i].completed){
         todos.splice(i, 1)
         };
    }
      
    } 
    
    clearCompletedTodos()
    console.log(todos)