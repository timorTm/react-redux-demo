import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import reducers from "../reducers/index";
import { createStore } from "redux";
import { Provider } from "react-redux";
const store = createStore(reducers);
const App = () => (
  <Provider store={store}>
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </Provider>
);

export default App;
