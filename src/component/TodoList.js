import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, onTodoClick }) => {
  console.log(todos);
  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <Todo key={index} onClick={() => onTodoClick(index)} {...todo} />
        );
      })}
    </ul>
  );
};
TodoList.PropTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};
export default TodoList;
