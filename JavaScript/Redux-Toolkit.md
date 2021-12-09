[Redux-Todo](https://github.com/WebDevBernard/Redux-Todo)

```
npm i react-redux @reduxjs/toolkit
```

Redux Toolkit

1. create a store with configureStore

```
./redux/store
import { configureStore } from "@reduxjs/toolkit";
export default configureStore({
  reducer: {},
});
```

2. add Provider to index

```
./index.js
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

```

3. create a slice with createSlice
   -create slice returns actions and reducers

```
./redux/todoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      title: "todo1",
      completed: false,
    },
    {
      id: 2,
      title: "todo2",
      completed: false,
    },
    {
      id: 3,
      title: "todo3",
      completed: true,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
  },
});

export const addTodo = todoSlice.actions;

export default todoSlice;
```

4. Provide the reducerSlice to Store

```
import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
export default configureStore({
  reducer: { todos: todoSlice.reducer },
});
```

5. Dispatch the action to form with useDispatch

- addTodo is the action defined in ./redux/todoSlice: reducers: {
  addTodo: (state, action) => {...}

```
./components/AddTodoForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../redux/todoSlice";

const AddTodoForm = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      todoActions.addTodo({
        title: value,
      })
    );
  };

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
        ...
    </form>
  );
};

export default AddTodoForm;
```

6. Display the action with useSelector

- todos in state.todos is the key defined in ./redux/store: reducer: { todos: todoSlice.reducer }

```
./components/TodoList
import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
};

export default TodoList;
```
