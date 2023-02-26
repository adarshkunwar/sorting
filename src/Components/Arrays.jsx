import React, { useState } from "react";
import "./Arrays.css";
import Layout from "./Layout/Layout";

//Variables
// const numberOfArray = 100;
const maxValueForArray = 1200;
// const shortTime = 1; //bubble Sort, Selection Sort
// const LongTime = 50; //Insertion Sort

const Arrays = () => {
  // Use States
  const [timeOfSort, setTimeOfSort] = useState(10);
  const [numberOfArray, setNumberOfArray] = useState(100);
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [SortingName, setSortingName] = useState("bubbleSort");
  const [count, setCount] = useState(0);
  const [compareIndexes, setCompareIndexes] = useState([]);

  const range = () => {
    let a = document.getElementById("ran").value;
    // console.log(a);
    let b = window.innerWidth * 0.185;
    // console.log(b);
    let calc = Math.floor((a / 100) * b);
    // console.log(calc);
    setNumberOfArray(calc);
  };

  const timeSort = () => {
    let b = document.getElementById("tim").value;
    if (b === 0) {
      b = 1;
    }
    setTimeOfSort(b);
    // setTimeOfSort(b + 1);
  };

  //Create Array
  const createArray = () => {
    let newArray = [];
    setCount(0);
    for (let i = 0; i < numberOfArray; i++) {
      newArray.push(Math.floor(Math.random() * maxValueForArray));
    }
    setArray(newArray);
  };

  // Sorting Operations
  const sortingOperation = () => {
    if (SortingName === "bubbleSort") {
      bubbleSort();
    } else if (SortingName === "selectionSort") {
      selectionSort();
    } else if (SortingName === "insertionSort") {
      InsertionSort();
    } else if (SortingName === "mergeSort") {
      mergeSort();
    } else if (SortingName === "shellSort") {
      shellSort();
    }
  };

  //Bubble Sort
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
          }, timeOfSort)
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

  //Selection Sort
  const selectionSort = async () => {
    setSorting(true);
    for (let i = 0; i < array.length; i++) {
      let tempI = i;
      for (let j = i + 1; j < array.length; j++) {
        await new Promise((resolve) => setTimeout(resolve, timeOfSort));
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

  //Insertion Sort
  const InsertionSort = async () => {
    setSorting(true);
    let newArray = [...array];
    for (let i = 1; i < newArray.length; i++) {
      for (let j = i; j > 0; j--) {
        await new Promise((resolve) => setTimeout(resolve, timeOfSort));
        setCompareIndexes([i, j]);
        if (newArray[j] < newArray[j - 1]) {
          let temp = newArray[j];
          newArray[j] = newArray[j - 1];
          newArray[j - 1] = temp;
          setArray([...newArray]);
        }
      }
    }
    setSorting(false);
  };

  // Merge sort
  const mergeSort = async () => {
    const newArray = [...array];

    const merge = async (left, right) => {
      let result = [];
      let i = 0,
        j = 0;
      while (i < left.length && j < right.length) {
        await new Promise((resolve) => setTimeout(resolve, timeOfSort));

        if (left[i] < right[j]) {
          result.push(left[i]);
          i++;
        } else {
          result.push(right[j]);
          j++;
        }
      }
      while (i < left.length) {
        result.push(left[i]);
        i++;
      }
      while (j < right.length) {
        result.push(right[j]);
        j++;
      }
      console.log(result);
      return result;
    };

    const split = async (arr) => {
      if (arr.length <= 1) return arr;
      let mid = Math.floor(arr.length / 2);
      let left = arr.slice(0, mid);
      let right = arr.slice(mid);
      return await merge(await split(left), await split(right));
    };

    await split(newArray);
    setArray(await split(newArray));
    return split(newArray);
  };

  const shellSort = async () => {
    const newArray = [...array];

    let max = Math.floor(newArray.length);
    let mid = Math.floor(max / 2);

    let isSorted = false;
    let diff = mid;
    while (!isSorted && diff > 0) {
      // console.log("shellSort");

      isSorted = true;
      let smallSort = false;

      while (!smallSort && diff > 1) {
        smallSort = true;
        isSorted = false;
        for (let i = 0; i + diff < max; i++) {
          await new Promise((resolve) => setTimeout(resolve, timeOfSort));
          let j = i + diff;
          console.log(i, j);
          setCompareIndexes([i, j]);
          setCount((prev) => prev + 1);
          // console.log(i, j);

          if (array[i] > array[j]) {
            smallSort = false;
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }
        }
      }
      // console.error("it got out");

      if (diff === 1) {
        let checkNeeded = true;
        while (checkNeeded) {
          checkNeeded = false;
          console.log("its in 1");
          for (let tempNum = 0; tempNum < max - 1; tempNum++) {
            await new Promise((resolve) => setTimeout(resolve, 10));
            setCompareIndexes([tempNum, tempNum + 1]);
            setCount((prev) => prev + 1);
            if (array[tempNum] > array[tempNum + 1]) {
              isSorted = false;
              let temp = array[tempNum];
              array[tempNum] = array[tempNum + 1];
              array[tempNum + 1] = temp;
            }
            // isSorted = true;
          }
        }
      }
      if (diff > 1) {
        diff = Math.floor(diff / 2);
      }
    }
  };

  // console.log(mergeSort());

  return (
    <Layout setSortingName={setSortingName} sorting={sorting}>
      <div>
        <div className="flex">
          <div className="flex flex-col">
            <div>Array range</div>
            <input type="range" name="array" id="ran" onInput={() => range()} />
          </div>
          <div className="flex flex-col">
            <div> Sorting time</div>
            <input
              type="range"
              value={timeOfSort}
              name="time"
              id="tim"
              onInput={() => timeSort()}
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-full">
            <div className="flex justify-center gap-20 pt-10 text-xl  ">
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
        {/* {array.map((val, i) => (
          <span key={i}>{val} </span>
        ))} */}
        <div>
          {count && <div> {count} </div>}
          <div className="array_list">
            {array.map((val, i) => (
              <div
                key={i}
                className={`box ${
                  compareIndexes[0] === i || compareIndexes[1] === i
                    ? "compare"
                    : "notCompared"
                }`}
                style={{ height: val * 0.5, width: 2 }}
              >
                {/* {val} */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Arrays;
