import React, { useState } from "react";
import Layout from "../Layout/Layout";

const BubbleSort = () => {
  // useState

  //   array data
  const [totalArray, setTotalArray] = useState([]);
  const [maxArray, setMaxArray] = useState(10);
  const [time, setTime] = useState(10);

  //   compare data
  const [successIndices, setSuccessIndices] = useState([]);
  const [compareIndices, setCompareIndices] = useState([]);

  const createRandomArray = () => {
    let tempArray = [];
    for (let i = 0; i < maxArray; i++) {
      let num = Math.floor(Math.random() * maxArray * 10);

      //   if (tempArray.some(num)) {
      tempArray.push(num);
      //   console.log(num);
      //   }
    }
    setTotalArray([...tempArray]);
  };

  const sort = async () => {
    let tempArray = [...totalArray];

    for (let i = 0; i < tempArray.length; i++) {
      let newSuccessIndices = [...successIndices];
      let newCompareIndices = [];

      for (let j = 0; j < tempArray.length; j++) {
        let left = j;
        let right = j + 1;
        newCompareIndices = [left, right];
        // console.log(left, right);
        // console.log(newCompareIndices.length);
        await new Promise((resolve) => setTimeout(resolve, time));
        setCompareIndices([...newCompareIndices]);
        console.log(compareIndices);
        if (tempArray[left] > tempArray[right]) {
          let temp = tempArray[left];

          tempArray[left] = tempArray[right];
          tempArray[right] = temp;
          setTotalArray([...tempArray]);
        } else {
          newSuccessIndices = [left, right];
        }
      }

      setSuccessIndices(newSuccessIndices);
    }
  };

  return (
    <div className="w-full">
      <Layout>
        <div className="grid grid-cols-12">
          {/* left */}
          <div className="col-span-3">
            <div className="flex flex-col">
              {/* array */}
              <div className="flex flex-col w-fit">
                <div>Array</div>
                <div className="flex flex-wrap">
                  {totalArray.map((val, i) => (
                    <div key={i}>{val},</div>
                  ))}
                </div>
              </div>
              {/* range */}
              <div className="flex flex-col">
                {/* array max */}
                <div className="flex">
                  <div>Array Number</div>
                  <div>
                    <input
                      type="range"
                      value={maxArray}
                      name="array_max"
                      id="array_max"
                      onChange={(e) => {
                        setMaxArray(e.target.value);
                      }}
                    />
                  </div>
                </div>
                {/* array max */}
                <div className="flex">
                  <div>sorting time</div>
                  <div>
                    <input
                      type="range"
                      value={time}
                      name="sorting_time"
                      id="sorting_time"
                      onChange={(e) => {
                        setTime(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* create-array */}
              <div className="flex flex-col">
                <div onClick={() => createRandomArray()}>Create array</div>
                <div onClick={() => sort()}>Bubble Sort begins</div>
              </div>
            </div>
          </div>
          <div className="col-span-9">
            <div className="flex gap-1">
              {totalArray.map((val, i) => (
                <div
                  key={i}
                  style={{ height: val, width: 10 }}
                  className={`border 
                        ${
                          compareIndices[i]
                            ? "bg-yellow-300"
                            : `${
                                successIndices[i]
                                  ? `bg-green-300}`
                                  : `bg-red-300`
                              }`
                        }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default BubbleSort;
