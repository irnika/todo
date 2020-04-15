const todos = [
    { title: "Задача 1", description: "Сделать что-то", completed: false }, // 0
    { title: "Задача 2", description: "Сделать что-то", completed: true }, // 1
    { title: "Задача 3", description: "Сделать что-то", completed: false } // 2
 ];
 
function addTodo(title, description) {
    todos.push({ title: title, description: description, completed: false }) 
  }
  
addTodo("Задача 4", "Сделать что-то")




function toggleTodo(index) {
    if (todos[index].completed){
        todos[index].completed = false
        }
    else{todos[index].completed = true}
  }
  
toggleTodo(3)




function deleteTodo(index) {
    todos.splice(index, 1)
  }

deleteTodo(1)




console.log(todos)
 