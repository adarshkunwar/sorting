import React, { useState } from "react";
import "./Arrays.css";
import Layout from "./Layout/Layout.jsx";
import { createArray, range, timeSort } from "./ArrayUtils";
import { bubbleSort, selectionSort, insertionSort, mergeSort, shellSort } from "./SortingAlgorithms";

const maxValueForArray = 1200;

const Arrays = () => {
  // State variables
  const [timeOfSort, setTimeOfSort] = useState(10);
  const [numberOfArray, setNumberOfArray] = useState(100);
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [SortingName, setSortingName] = useState("bubbleSort");
  const [count, setCount] = useState(0);
  const [compareIndexes, setCompareIndexes] = useState([]);

  // Perform sorting operation based on selected sort type
  const sortingOperation = () => {
    switch (SortingName) {
      case "bubbleSort":
        bubbleSort(array, setArray, setSorting, timeOfSort, setCompareIndexes, setCount);
        break;
      case "selectionSort":
        selectionSort(array, setArray, setSorting, timeOfSort, setCompareIndexes, setCount);
        break;
      case "insertionSort":
        insertionSort(array, setArray, setSorting, timeOfSort, setCompareIndexes, setCount);
        break;
      case "mergeSort":
        mergeSort(array, setArray, setSorting, timeOfSort, setCompareIndexes, setCount);
        break;
      case "shellSort":
        shellSort(array, setArray, setSorting, timeOfSort, setCompareIndexes, setCount);
        break;
      default:
        break;
    }
  };

  return (
    <Layout setSortingName={setSortingName} sorting={sorting}>
      <div>
        <div className="flex">
          <div className="flex flex-col">
            <div>Array range</div>
            <input type="range" name="array" id="ran" onInput={() => range(setNumberOfArray)} />
          </div>
          <div className="flex flex-col">
            <div> Sorting time</div>
            <input
              type="range"
              value={timeOfSort}
              name="time"
              id="tim"
              onInput={() => timeSort(setTimeOfSort)}
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-full">
            <div className="flex justify-center gap-20 pt-10 text-xl">
              <button onClick={() => createArray(numberOfArray, setArray, maxValueForArray)}>Create Array</button>
              <button
                onClick={sortingOperation}
                disabled={sorting || array.length === 0}
              >
                {SortingName}
              </button>
            </div>
          </div>
        </div>
        <div>
          {count && <div>Operations: {count}</div>}
          <div className="array_list">
            {array.map((val, i) => (
              <div
                key={i}
                className={`box ${compareIndexes.includes(i) ? "compare" : "notCompared"
                  }`}
                style={{ height: val * 0.5, width: 2 }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Arrays;
