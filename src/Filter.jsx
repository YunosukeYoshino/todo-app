const filterOptions = [
  { value: "all", label: "すべて" },
  { value: "notStarted", label: "未着手" },
  { value: "inProgress", label: "作業中" },
  { value: "done", label: "完了" },
];
export const Filter = () => {
  return (
    <>
      {filterOptions.map(({ value, label }) => (
        <option value={value}>{label}</option>
      ))}
    </>
  );
};
