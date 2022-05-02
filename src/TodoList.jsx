import React from "react";
import { Filter } from "./Filter";

export const TodoList = ({ todo, deleteHandleClick, editClick }) => {
  return (
    <>
      <li key={todo.id}>
        <span>{todo.title}</span>
        <select name="status" value={todo.status}>
          <Filter />
        </select>
        <button onClick={() => editClick(todo)}>編集</button>
        <button onClick={() => deleteHandleClick(todo.id)}>削除</button>
      </li>
    </>
  );
};
