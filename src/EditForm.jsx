import React from "react";

export const EditForm = ({ value, setEditable, onChange, onClickUpdate }) => {
  return (
    <>
      <h2>Edit Todo</h2>
      <input
        type="text"
        placeholder="編集をする"
        value={value.title}
        onChange={onChange}
      />
      <button onClick={() => setEditable(false)}>Cancel</button>
      <button type="submit" onClick={onClickUpdate}>
        Update
      </button>
    </>
  );
};
