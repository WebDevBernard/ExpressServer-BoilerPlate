[https://www.youtube.com/watch?v=FJDVKeh7RJI](https://www.youtube.com/watch?v=FJDVKeh7RJI)

### Toggle Complete, Delete, Edit

```
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodoList(
      todoList.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodoList(
      todoList.map((todo) => {
        return todo.id === id ? { ...todo, todo: editTodo } : todo;
      })
    );
    setEdit(false);
  };
```

### useReducer:

```
import { useReducer } from "react";
import { Todo } from "../model";

type Actions =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: number }
  | { type: "done"; payload: number };

const TodoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];
    case "remove":
      return state.filter((todo) => todo.id !== action.payload);
    case "done":
      return state.map((todo) => {
        todo.id !== action.payload ? { ...todo, isDone: !todo.isDone } : todo;
      });
    default:
      return state;
  }
};

const ReduceExample = () => {
  const [state, dispatch] = useReducer(TodoReducer, []);
  return <div />;
};

export default ReduceExample;
```
