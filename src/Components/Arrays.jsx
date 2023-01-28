import React, { useState } from "react";
import "./Arrays.css";
import Layout from "./Layout/Layout";
const Arrays = () => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [SortingName, setSortingName] = useState("insertionSort");
  const [count, setCount] = useState(0);
  const [compareIndexes, setCompareIndexes] = useState([]);
  // const [compare1, setCompare1] = useState();
  // const [compare2, setCompare2] = useState();

  const createArray = () => {
    let newArray = [];
    setCount(0);
    for (let i = 0; i < 12; i++) {
      newArray.push(Math.floor(Math.random() * 30));
    }
    setArray(newArray);
  };

  const sortingOperation = () => {
    if (SortingName === "bubbleSort") {
      bubbleSort();
    } else if (SortingName === "selectionSort") {
      selectionSort();
    } else if (SortingName === "insertionSort") {
      InsertionSort();
    }
  };

  const bubbleSort = async () => {
    setSorting(true);
    let isSorted = false;
    while (!isSorted) {
      isSorted = true;
      for (let i = 0; i < array.length - 1; i++) {
        await new Promise((resolve) =>
          setTimeout(() => {
            setCompareIndexes([i, i + 1]);
            resolve();
          }, 500)
        );
        if (array[i] > array[i + 1]) {
          let temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          setCount((prev) => prev + 1);
          setArray([...array]);
          isSorted = false;
        }
      }
    }
    setSorting(false);
  };

  const selectionSort = async () => {
    setSorting(true);
    for (let i = 0; i < array.length; i++) {
      let tempI = i;
      for (let j = i + 1; j < array.length; j++) {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setCompareIndexes([i, j]);
        if (array[tempI] > array[j]) {
          tempI = j;
        }
      }
      if (tempI !== i) {
        setCount((prev) => prev + 1);
        let temp = array[i];
        array[i] = array[tempI];
        array[tempI] = temp;
      }
      setArray([...array]);
      // isSorted = false;
    }
    setSorting(false);
  };
  //Chat gpt code
  // const InsertionSort = async () => {
  //   setSorting(true);
  //   let temp, j;
  //   for (let i = 1; i < array.length; i++) {
  //     temp = array[i];
  //     j = i - 1;
  //     while (j >= 0 && array[j] > temp) {
  //       await new Promise((resolve) => setTimeout(resolve, 500));
  //       setCompareIndexes([i, j]);
  //       array[j + 1] = array[j];
  //       j--;
  //     }
  //     array[j + 1] = temp;
  //     setArray([...array]);
  //   }
  //   setSorting(false);
  // };

  const InsertionSort = async () => {
    setSorting(true);
    let newArray = [...array];
    for (let i = 1; i < newArray.length; i++) {
      for (let j = i; j > 0; j--) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setCompareIndexes([i, j]);
        if (newArray[j] < newArray[j - 1]) {
          let temp = newArray[j];
          newArray[j] = newArray[j - 1];
          newArray[j - 1] = temp;
          setArray(newArray);
        }
      }
    }
    setSorting(false);
  };

  return (
    <Layout setSortingName={setSortingName} sorting={sorting}>
      <div>
        <div className="flex items-center">
          <div className="w-full">
            <div className="flex justify-center gap-20 pt-10">
              <button onClick={createArray}>Create Array</button>
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
          {count && <div> {count} </div>}
          {array.map((val, i) => (
            <div
              key={i}
              className={`box ${
                compareIndexes[0] === i || compareIndexes[1] === i
                  ? "compare"
                  : "notCompared"
              }`}
              style={{ height: 40, width: val * 40 }}
            >
              {val}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Arrays;
