
// SortingAlgorithms.js

export const bubbleSort = async (array, setArray, setSorting, timeOfSort, setCompareIndexes, setCount) => {
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

export const selectionSort = async (array, setArray, setSorting, timeOfSort, setCompareIndexes, setCount) => {
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
  }
  setSorting(false);
};

export const insertionSort = async (array, setArray, setSorting, timeOfSort, setCompareIndexes, setCount) => {
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

export const mergeSort = async (array, setArray, setSorting, timeOfSort, setCompareIndexes, setCount) => {
  setSorting(true);
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
    return result;
  };

  const split = async (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return await merge(await split(left), await split(right));
  };

  setArray(await split(newArray));
  setSorting(false);
};

export const shellSort = async (array, setArray, setSorting, timeOfSort, setCompareIndexes, setCount) => {
  setSorting(true);
  const newArray = [...array];
  let max = Math.floor(newArray.length);
  let mid = Math.floor(max / 2);
  let isSorted = false;
  let diff = mid;

  while (!isSorted && diff > 0) {
    isSorted = true;
    let smallSort = false;

    while (!smallSort && diff > 1) {
      smallSort = true;
      isSorted = false;
      for (let i = 0; i + diff < max; i++) {
        await new Promise((resolve) => setTimeout(resolve, timeOfSort));
        let j = i + diff;
        setCompareIndexes([i, j]);
        setCount((prev) => prev + 1);
        if (array[i] > array[j]) {
          smallSort = false;
          let temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }

    if (diff === 1) {
      let checkNeeded = true;
      while (checkNeeded) {
        checkNeeded = false;
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
        }
      }
    }

    if (diff > 1) {
      diff = Math.floor(diff / 2);
    }
  }
  setArray(newArray);
  setSorting(false);
};
