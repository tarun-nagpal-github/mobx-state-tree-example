import React from "react";
import { observer } from "mobx-react";

const TodoView = observer(props => (
    <div>
      <input
        type="checkbox"
        checked={props.todo.done}
        onChange={e => props.todo.toggle()}
      />
      <input
        type="text"
        value={props.todo.name}
        onChange={e => props.todo.setName(e.target.value)}
      />
    </div>
  ));

  export default TodoView;