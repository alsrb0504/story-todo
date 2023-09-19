import React, { useState } from "react";
import { Todo } from "./types";
import TodoItem from "./components/TodoItem";
import "./App.css";

const initTodos: Todo[] = [
  {
    todoId: 324,
    text: "오늘 할 일",
    isChecked: false,
  },
  {
    todoId: 124,
    text: "출근하기...",
    isChecked: false,
  },
  {
    todoId: 980,
    text: "퇴근하기!",
    isChecked: false,
  },
];

function App() {
  const [todoItems, setTodoItems] = useState<Todo[]>(initTodos);
  const [addText, setAddText] = useState("");

  const onClickTodo = (todoId: number) => {
    const updated = todoItems.map((todo) =>
      todo.todoId === todoId ? { ...todo, isChecked: !todo.isChecked } : todo
    );

    setTodoItems(updated);
  };

  const onDeleteTodo = (todoId: number) => {
    const updated = todoItems.filter((todo) => todo.todoId !== todoId);
    setTodoItems(updated);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);

    setAddText(e.target.value);
  };

  const addTodo = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const newTodo: Todo = {
        todoId: todoItems.length + 1,
        text: addText,
        isChecked: false,
      };

      setTodoItems([...todoItems, newTodo]);
      setAddText("");
    }
  };

  return (
    <div className="App bg-bg flex justify-center items-center h-screen">
      <div className="flex flex-col h-5/6 w-1/2 max-w-xl bg-white py-4 text-center shadow-2xl text-default">
        <h1 className="text-default pb-4 text-3xl font-bold border-b-default border-gray-300">
          Todo List
        </h1>
        <ul className="flex-1">
          {todoItems.map((todo) => (
            <TodoItem //
              key={todo.todoId}
              todo={todo}
              onClickTodo={onClickTodo}
              onDeleteTodo={onDeleteTodo}
            />
          ))}
        </ul>

        <input //
          className="border-t-default py-6 px-4 outline-none font-semibold text-xl placeholder:text-default placeholder:opacity-50"
          type="text"
          placeholder="Add Todo +"
          value={addText}
          onChange={handleChange}
          onKeyDown={addTodo}
        />
      </div>
    </div>
  );
}

export default App;
