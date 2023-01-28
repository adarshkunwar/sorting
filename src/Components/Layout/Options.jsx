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
  ];
  return (
    <div className="flex flex-col w-fit bg-blue-400 h-screen justify-evenly">
      {options.map((val, i) => (
        <button
          key={i}
          className={`cursor-pointer`}
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
