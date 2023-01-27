import React, { useState } from "react";
import "./Arrays.css";
const Arrays = () => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);

  const createArray = () => {
    let newArray = [];
    for (let i = 0; i < 10; i++) {
      newArray.push(Math.floor(Math.random() * 30));
    }
    setArray(newArray);
  };

  const sortArray = async () => {
    setSorting(true);
    let isSorted = false;
    while (!isSorted) {
      isSorted = true;
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          let temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          setArray([...array]);
          isSorted = false;
        }
      }
    }
    setSorting(false);
  };

  return (
    <div>
      <button onClick={createArray}>Create Array</button>
      <button onClick={sortArray} disabled={sorting || array.length === 0}>
        Sort Array
      </button>
      <div>
        {array.map((val, i) => (
          <div key={i} className="box" style={{ height: 40, width: val * 40 }}>
            {val}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Arrays;
