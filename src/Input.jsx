import React from "react";
export const InputForm = ({ onChange, onClick, value }) => {
  return (
    <div className="pt-12">
      <input
        type="text"
        placeholder="TODOを追加"
        value={value}
        onChange={onChange}
        className="bg-gray-100 rounded-md py-2 px-4 border-2 outline-none"
      />
      <button
        className="bg-blue-400 py-2 px-4 rounded-md font-semibold"
        onClick={onClick}
      >
        送信
      </button>
    </div>
  );
};
