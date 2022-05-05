const filterOptions = [
  { id: 1, value: "all", label: "すべて" },
  { id: 2, value: "notStarted", label: "未着手" },
  { id: 3, value: "inProgress", label: "作業中" },
  { id: 4, value: "done", label: "完了" },
];
export const Filter = () => {
  return (
    <>
      {filterOptions.map(({ value, label, id }) => (
        <option key={id} value={value}>
          {label}
        </option>
      ))}
    </>
  );
};
