import { useState } from "react";

function ListItem({ text, onDelete }) {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    // if (checked == true) {
    //     setChecked(false);
    // } else {
    //     setChecked(true);
    // }
    setChecked(!checked);
  };
  return (
    <li
      className={`bg-indigo-800 p-2 ${
        checked ? "text-green-400 line-through" : "text-white"
      }`}
    >
      {text} <input type="checkbox" checked={checked} onChange={handleCheck} />
    </li>
  );
}

export default ListItem;
