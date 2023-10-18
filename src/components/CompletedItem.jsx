function CompletedItem({ text, onRestore }) {
  return (
    <li className="flex justify-between rounded-md bg-green-500 p-2">
      <span>{text}</span>
      <button onClick={onRestore}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3.06 13a9 9 0 1 0 .49 -4.087"></path>
          <path d="M3 4.001v5h5"></path>
          <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
        </svg>
      </button>
    </li>
  );
}

export default CompletedItem;
