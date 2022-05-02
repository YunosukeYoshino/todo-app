import React from "react";
import { Filter } from "./Filter";

export const TodoList = ({ todo, deleteHandleClick, editClick }) => {
  return (
    <>
      <li
        key={todo.id}
        className="mt-6  bg-white p-6 rounded-md text-gray-500 shadow-lg"
      >
        <span>{todo.title}</span>
        <select name="status" value={todo.status}>
          <Filter />
        </select>
        <button
          className="bg-blue-400 py-2 px-4 rounded-md font-semibold"
          onClick={() => editClick(todo)}
        >
          編集
        </button>
        <button
          className="bg-gray-300 py-2 px-4 mr-2 ml-2 rounded-md font-semibold"
          onClick={() => deleteHandleClick(todo.id)}
        >
          削除
        </button>
      </li>
    </>
  );
};
