// ArrayUtils.js

export const range = (setNumberOfArray) => {
  let a = document.getElementById("ran").value;
  let b = window.innerWidth * 0.185;
  let calc = Math.floor((a / 100) * b);
  setNumberOfArray(calc);
};

export const timeSort = (setTimeOfSort) => {
  let b = document.getElementById("tim").value;
  if (b === 0) {
    b = 1;
  }
  setTimeOfSort(b);
};

export const createArray = (numberOfArray, setArray, maxValueForArray) => {
  let newArray = [];
  for (let i = 0; i < numberOfArray; i++) {
    newArray.push(Math.floor(Math.random() * maxValueForArray));
  }
  setArray(newArray);
};
