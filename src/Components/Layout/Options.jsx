import React from "react";

const Options = ({ setSortingName, sorting }) => {
  const options = [
    {
      sortName: "bubbleSort",
    },
    {
      sortName: "selectionSort",
    },
    {
      sortName: "insertionSort",
    },
    {
      sortName: "shellSort",
    },
  ];
  return (
    <div className="flex bg-blue-400 px-0.5 py-2 w-screen justify-evenly">
      {options.map((val, i) => (
        <button
          key={i}
          className={`cursor-pointer hover:bg-white px-0.5 rounded-md  transition-all duration-100 text-lg`}
          onClick={() => setSortingName(val.sortName)}
          disabled={sorting}
        >
          {val.sortName}
        </button>
      ))}
    </div>
  );
};

export default Options;
