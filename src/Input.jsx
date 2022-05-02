import React from "react";
export const InputForm = ({ onChange, onClick, value }) => {
  return (
    <>
      <input
        type="text"
        placeholder="TODOを追加"
        value={value}
        onChange={onChange}
      />
      <button onClick={onClick}>送信</button>
    </>
  );
};
