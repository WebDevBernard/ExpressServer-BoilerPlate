// https://www.npmjs.com/package/@types/react-beautiful-dnd
import React, { FC, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
const App: FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [completedList, setCompletedList] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      //
      setTodoList((prevState) => [
        ...prevState,
        { id: Date.now(), todo: todo, isDone: false },
      ]);
      // reset input
      setTodo("");
    }
  };
  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    // console.log(result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = todoList;
    let complete = completedList;
    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedList(complete);
    setTodoList(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todoList={todoList}
          setTodoList={setTodoList}
          completedList={completedList}
          setCompletedList={setCompletedList}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
