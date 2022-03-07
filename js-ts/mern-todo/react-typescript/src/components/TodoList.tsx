import React, { FC } from "react";
import "./styles.css";
import { Todo } from "../model";
import TodoItem from "./TodoItem";
import { Droppable } from "react-beautiful-dnd";
interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedList: Todo[];
  setCompletedList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: FC<Props> = ({
  todoList,
  setTodoList,
  completedList,
  setCompletedList,
}) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__headings">Active Tasks</span>
            {todoList.map((todo, index) => {
              return (
                <TodoItem
                  index={index}
                  todo={todo}
                  todoList={todoList}
                  key={todo.id}
                  setTodoList={setTodoList}
                />
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`todos  ${
              snapshot.isDraggingOver ? "dragcomplete" : "remove"
            }`}
          >
            <span
              className={`todos  ${
                snapshot.isDraggingOver ? "dragcomplete" : "remove"
              }`}
            >
              Completed Tasks
            </span>
            {completedList.map((todo, index) => {
              return (
                <TodoItem
                  index={index}
                  todo={todo}
                  todoList={completedList}
                  key={todo.id}
                  setTodoList={setCompletedList}
                />
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
