import React, { useState, useEffect } from 'react';
import { getTodoList } from '../utils/Storage';

const ListTodos = () => {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    // get todo list
    const todoList = getTodoList();
    setTodoItems(todoList);
  }, [])

  return (
    <div>
      {
        todoItems && todoItems.length > 0 ?
          todoItems.map(item => (
            <div className="todo-item border border-dark rounded mt-2" key={item.created}>
        <h6>{item.title}</h6>

          <div className="bg-light border border-secondary rounded">
            <div
              className="bg-secondary rounded-sm"
              style={{
                height: "6px",
                width: "5px"
                // width: `${(date.getHours() / 24) * 100}%`
              }}
            ></div>
          </div>
      
      </div>
          )) : <h6>No todo items</h6>
      }
    </div>
  );
}

export default ListTodos;