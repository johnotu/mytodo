import React from 'react';

const AddTodo = () => {
  return (
    <div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <input
            type="text"
            className="form-control"
            name="new-todo"
            placeholder="Enter a new todo item"
          />
        </div>
        <div className="form-group col-md-6">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="everyday-radio"
              name="todo-interval"
            />
            <label className="form-check-label" htmlFor="everyday-radio">
              Everyday
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="weekdays-radio"
              name="todo-interval"
            />
            <label className="form-check-label" htmlFor="weekdays-radio">
              Weekdays
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="weekend-radio"
              name="todo-interval"
            />
            <label className="form-check-label" htmlFor="weekend-radio">
              Weekend
            </label>
          </div>
        </div>
      </div>
      
      <button className="btn btn-dark form-control">Add</button>
    </div>
  );
}

export default AddTodo;