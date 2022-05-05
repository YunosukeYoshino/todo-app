import React, { useState } from "react";
import { InputForm } from "./Input";
import { TodoList } from "./TodoList";
import { EditForm } from "./EditForm";
import "./style.css";
export const App = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [todoTitle, setTodoTitle] = useState([]);
  const onChangeToDoText = (e) => {
    setTodoTitle(e.target.value);
  };
  const handleSetTodoTitle = () => {
    if (todoTitle === "") return;
    // 初期値に空文字であれば早期リターン

    const newTodoItem = [
      ...todoItems,
      {
        id: todoItems.length + 1,
        title: todoTitle,
      },
    ];
    // 定数newTodoItemに新しい配列を格納する。idとtitle
    setTodoItems(newTodoItem);
    //送信追加時にinputフィールドを空文字に変更
    setTodoTitle("");
  };
  const DeleteHandleClick = (id) => {
    const removeItem = todoItems.filter((todo) => {
      //削除するアイテムと一致しない残りのToDoを返します
      return todo.id !== id;
    });

    setTodoItems(removeItem);
  };

  const [isEditable, setEditable] = useState(false);
  const [currentTodo, setCurrentTodo] = useState([]);
  const EditHandleClick = (todo) => {
    // isEditableの初期値boolean値をtrueに変更
    setEditable(true);
    //編集ボタンクリック時に引数に渡しているtodoで新しいオブジェクトとして渡す
    setCurrentTodo({ ...todo });
  };

  const EditInputTodo = (e) => {
    //handleSetTodoTitleにsetしたcurrentTodoに対してスプレッド構文で新しくオブジェクトを作っている。
    setCurrentTodo({ ...currentTodo, title: e.target.value });
  };

  // valueに入ってる値をそのままsetToDoに新しいオブジェクトに格納する
  const onClickUpdate = (id, updatedTodo) => {
    const updatedItem = todoItems.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });

    setEditable(false);

    setTodoItems(updatedItem);
    console.log(todoItems);
  };

  const updateHandleClick = () => {
    onClickUpdate(currentTodo.id, currentTodo);
  };
  return (
    <div className="flex flex-col w-full  items-center justify-center">
      {isEditable ? (
        <>
          <EditForm
            setEditable={setEditable}
            value={currentTodo}
            onChange={EditInputTodo}
            onClickUpdate={updateHandleClick}
          />
        </>
      ) : (
        <>
          <nav className="w-full bg-pink-300 py-4">
            <h1 className="text-white text-center text-2xl font-bold">
              ToDoList
            </h1>
          </nav>
          <InputForm
            onClick={handleSetTodoTitle}
            value={todoTitle}
            onChange={onChangeToDoText}
          />
          <ul className="listWrap w-9/12">
            <TodoList
              todoItems={todoItems}
              editClick={EditHandleClick}
              deleteHandleClick={DeleteHandleClick}
            />
          </ul>
        </>
      )}
    </div>
  );
};
