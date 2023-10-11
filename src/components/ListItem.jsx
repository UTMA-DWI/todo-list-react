import { useState } from "react";

// eslint-disable-next-line react/prop-types
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
      className={`rounded-md bg-indigo-800 p-2 ${
        checked ? "text-green-400 line-through" : "text-white"
      }`}
    >
      {text} <input type="checkbox" checked={checked} onChange={handleCheck} />
    </li>
  );
}

export default ListItem;
