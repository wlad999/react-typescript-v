import React, { useState, useEffect } from "react";
import { ToDoForm } from "../components/ToDoForm";
import { ToDoList } from "../components/TodoList";
import { ITodo } from "../interfaces";

declare var confirm: (question: string) => boolean;

export const TodosPage: React.FC = () => {
  //<Array<ITodo>>
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved);
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    //setTodos([newTodo, ...todos]);
    setTodos((prev) => [newTodo, ...prev]);
  };
  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
          // must be, but dont work
          //todo.completed=!todo.completed
        }
        return todo;
      })
    );
  };

  const removeHandeler = (id: number) => {
    //const shuldRemove = window.confirm(
    const shuldRemove = confirm("Are you sure you want to delete the task?");
    if (shuldRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };
  return (
    <>
      <ToDoForm onAdd={addHandler} />
      <ToDoList
        todos={todos}
        onRemove={removeHandeler}
        onToggle={toggleHandler}
      />
    </>
  );
};
