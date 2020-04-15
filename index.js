const todos = [
    { title: "Задача 1", description: "Сделать что-то", completed: false }, // 0
    { title: "Задача 2", description: "Сделать что-то", completed: true }, // 1
    { title: "Задача 3", description: "Сделать что-то", completed: false } // 2
 ];
 
 function addTodo(title, description) {
   todos.push({ title: "Задача 4", description: "Сделать что-то", completed: false })
     
 }
 addTodo()
 
 console.log(todos)
 