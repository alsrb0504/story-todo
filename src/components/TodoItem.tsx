import { Todo } from "../types";
import { BsCheck } from "react-icons/bs";

export interface TodoItemProps {
  todo: Todo;
  onClickTodo: (todoId: number) => void;
}

const TodoItem = ({
  todo: { todoId, isChecked, text, createdAt },
  onClickTodo,
}: TodoItemProps) => {
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
      <span
        className={`${isChecked && "opacity-50 line-through"}  
        flex-1 text-start text-xl`}
      >
        {text}
      </span>
      <span className={`${isChecked && "opacity-50 line-through"}`}>
        {createdAt}
      </span>
    </li>
  );
};

export default TodoItem;
