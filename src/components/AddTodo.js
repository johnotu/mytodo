// Make this a modal so screen only shows current todos with an action button that opens modal to create a new one

import React, { useState } from 'react';

import { saveTodoItem } from '../utils/Storage';

const AddTodo = () => {
  const [title, setTitle] = useState("");

  const [hasDuration, setHasDuration] = useState(false);

  // const [duration, setDuration] = useState("30");

  const [repeatInterval, setRepeatInterval] = useState("once"); // once, everyday, weekdays, weekend

  // Handle title input
  const handleTitle = e => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  // Handle hasDuration
  const handleHasDuration = e => setHasDuration(e.target.checked);

  // Handle repeatInterval
  const handleRepeatInterval = e => setRepeatInterval(e.target.value);

  // Handle addTodo
  const handleAddTodo = () => {
    // Get todo item
    const todoItem = { title, hasDuration, repeatInterval, createdAt: Date.now() };
    // Persist todo item
    saveTodoItem(todoItem);
  };

  // check title
  console.log("title", title);
  // check hasDuration
  console.log("hasDuration", hasDuration);
  // check repeatInterval
  console.log("repeatInterval", repeatInterval);

  return (
    <div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <input
            type="text"
            className="form-control"
            name="title"
            placeholder="Enter a new todo item"
            onChange={handleTitle}
          />
        </div>

        {/* Duration */}
        <div className="form-group col-md-6">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="set-duration"
              name="has-duration"
              onChange={handleHasDuration}
            />
            <label className="form-check-label" htmlFor="set-duration">
              Set duration
            </label>
          </div>
        </div>
      </div>

      <div className="form-row">
        {/* Interval */}
        <div className="form-group col-md-12">
          <h6>Interval</h6>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="once-radio"
              name="todo-interval"
              value="once"
              onChange={handleRepeatInterval}
              defaultChecked={repeatInterval === "once"}
            />
            <label className="form-check-label" htmlFor="once-radio">
              Once
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="everyday-radio"
              name="todo-interval"
              value="everyday"
              onChange={handleRepeatInterval}
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
              value="weekdays"
              onChange={handleRepeatInterval}
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
              value="weekends"
            />
            <label className="form-check-label" htmlFor="weekend-radio">
              Weekend
            </label>
          </div>
        </div>
      </div>

      <button className="btn btn-dark form-control" onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
};

  export default AddTodo;
