import { useState } from "react";
import { Todo } from "../types";
import { BsCheck } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiSolidPencil } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";

export interface TodoItemProps {
  todo: Todo;
  onClickTodo: (todoId: number) => void;
  onDeleteTodo: (todoId: number) => void;
  onUpdateTodo: (todoId: number, updatedText: string) => void;
}

const TodoItem = ({
  todo: { todoId, isChecked, text },
  onClickTodo,
  onDeleteTodo,
  onUpdateTodo,
}: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };

  const handleSubmit = () => {
    onUpdateTodo(todoId, editText);
    setIsEditing(false);
  };

  return (
    <li className="flex gap-4 items-center h-16 px-6 text-default font-semibold">
      <div //
        className={`${
          isChecked && "bg-default"
        } w-5 h-5 border-default rounded border-8 flex items-center justify-center`}
        onClick={() => onClickTodo(todoId)}
      >
        <BsCheck color="#fff" />
      </div>

      {isEditing && (
        <input //
          className="flex-1 border-default border-2 rounded-md p-2 outline-default"
          type="text"
          value={editText}
          onChange={handleChange}
          autoFocus
        />
      )}

      {!isEditing && (
        <span
          className={`${
            isChecked && "opacity-50 line-through"
          }  flex-1 text-start text-xl`}
        >
          {text}
        </span>
      )}

      {isEditing && (
        <FaCheck //
          className="text-3xl hover:opacity-60"
          onClick={handleSubmit}
        />
      )}

      {!isEditing && (
        <BiSolidPencil //
          className="text-3xl hover:opacity-60"
          onClick={() => setIsEditing(true)}
        />
      )}
      <AiFillCloseCircle //
        className="text-3xl hover:opacity-60"
        onClick={() => onDeleteTodo(todoId)}
      />
    </li>
  );
};

export default TodoItem;
