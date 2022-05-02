import React from "react";

export const EditForm = ({ value, setEditable, onChange, onClickUpdate }) => {
  return (
    <>
      <nav class="w-full bg-pink-300 py-4">
        <h1 className="text-white text-center text-2xl font-bold">
          todoを編集する
        </h1>
      </nav>
      <div className="p-12">
        <input
          type="text"
          placeholder="編集をする"
          value={value.title}
          onChange={onChange}
          className="bg-gray-100 rounded-md py-2 px-4 border-2 outline-none"
        />
        <button
          className="bg-gray-300 py-2 px-4 mr-2 ml-2 rounded-md font-semibold"
          onClick={() => setEditable(false)}
        >
          キャンセル
        </button>
        <button
          className="bg-blue-400 py-2 px-4 rounded-md font-semibold"
          type="submit"
          onClick={onClickUpdate}
        >
          アップデート
        </button>
      </div>
    </>
  );
};
