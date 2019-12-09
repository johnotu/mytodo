import React from 'react';

import AddTodo from './AddTodo';
import ListTodos from './ListTodos';

function Content() {
  return (
    <div>
      <div className="todo-content">
        <AddTodo />
      </div>
      <div className="todo-content">
        <ListTodos />
      </div>
    </div>
  );
}

export default Content;