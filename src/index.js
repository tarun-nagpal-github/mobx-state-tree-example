// Base Library 
import React from "react";

// MobX Library
import { render } from "react-dom";
import { observer } from "mobx-react";
import { values } from "mobx";

// Global Store
import store from "./store";

//  Components
import TodoView from "./components/TodoView";
import TodoCounterView from "./components/TodoCounterView";

const randomId = () => Math.floor(Math.random() * 1000).toString(36);
 
 
const App = observer(props => (
  <div>
    <button onClick={e => props.store.addTodo(randomId(), "New Task")}>
      Add Task
    </button>
    {values(props.store.todos).map(todo => (
      <TodoView todo={todo} />
    ))}
    <TodoCounterView store={props.store} />
  </div>
));

render(<App store={store} />, document.getElementById("root"));
