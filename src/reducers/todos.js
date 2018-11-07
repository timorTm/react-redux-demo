const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: action.id, text: action.text, complete: action.complete }
      ];
    case "TOGGLE_TODO":
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, complete: !action.complete } : todo
      );
    default:
      return state;
  }
};
export default todos;
