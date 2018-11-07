import { connect } from "react-redux";
import { toggleTodo } from "../actions/index";
import TodoList from "../component/TodoList";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_COMPLETED":
      return todos.filter(todo => todo.complete);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
    case "SHOW_ALL":
    default:
      return todos;
  }
};
const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
