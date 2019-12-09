
const saveTodoItem = todoItem => {
  // Get current todo list
  const currentTodoList = localStorage.getItem('mytodo') ? JSON.parse(localStorage.getItem('mytodo')) : [];
  // Add todoItem
  currentTodoList.push(todoItem);
  // Save updated todolist to localstorage
  localStorage.setItem('mytodo', JSON.stringify(currentTodoList));
}

const getTodoList = () => JSON.parse(localStorage.getItem('mytodo'));

export { saveTodoItem, getTodoList };