import React from "react";
import { useState, useRef, useReducer } from "react";

const allData = [
  [
    { letter: "I", state: "green" },
    { letter: "D", state: "yellow" },
    { letter: "I", state: "gray" },
    { letter: "O", state: "yellow" },
    { letter: "T", state: "yellow" },
  ],
  [
    { letter: "B", state: "typing" },
    { letter: "B", state: "typing" },
    { letter: "", state: "" },
    { letter: "", state: "" },
    { letter: "", state: "" },
  ],
  [
    { letter: "", state: "" },
    { letter: "", state: "" },
    { letter: "", state: "" },
    { letter: "", state: "" },
    { letter: "", state: "" },
  ],
  [
    { letter: "", state: "" },
    { letter: "", state: "" },
    { letter: "", state: "" },
    { letter: "", state: "" },
    { letter: "", state: "" },
  ],
  [
    { letter: "", state: "" },
    { letter: "", state: "" },
    { letter: "", state: "" },
    { letter: "", state: "" },
    { letter: "", state: "" },
  ],
  [
    { letter: "", state: "" },
    { letter: "", state: "" },
    { letter: "", state: "" },
    { letter: "", state: "" },
    { letter: "", state: "" },
  ],
];
const result = [...allData];
console.log(result);
// const isMatched = (inputLine: number) => {
//   answer.map((element, index) => {
//     const result = [...allData];
//     console.log(result);
//     if (element === matchingData[index].toUpperCase()) {
//       return (result[inputLine][index].state = "green");
//     } else if (answer.includes(matchingData[index].toUpperCase())) {
//       return (result[inputLine][index].state = "yellow");
//     } else {
//       return (result[inputLine][index].state = "gray");
//     }
//   });
// };
// console.log(result);
const inputStyle =
  "box-border w-16 h-16 border-solid border-2 m-1 flex items-center justify-center border-gray bg-white text-black text-center";
const boxStyle =
  "box-border w-16 h-16 border-solid border-2 m-1 flex items-center justify-center";
function App() {
  //const [inputLine, setInputLine] = useState(0);
  // const [inputArr, setInputArr] = useState([]);
  // const [allData, dispatch] = useReducer(reducer, [
  //   [
  //     { letter: "", state: "" },
  //     { letter: "", state: "" },
  //     { letter: "", state: "" },
  //     { letter: "", state: "" },
  //     { letter: "", state: "" },
  //   ],
  //   [
  //     { letter: "", state: "" },
  //     { letter: "", state: "" },
  //     { letter: "", state: "" },
  //     { letter: "", state: "" },
  //     { letter: "", state: "" },
  //   ],
  //   [
  //     { letter: "", state: "" },
  //     { letter: "", state: "" },
  //     { letter: "", state: "" },
  //     { letter: "", state: "" },
  //     { letter: "", state: "" },
  //   ],
  //   [
  //     { letter: "", state: "" },
  //     { letter: "", state: "" },
  //     { letter: "", state: "" },
  //     { letter: "", state: "" },
  //     { letter: "", state: "" },
  //   ],
  //   [
  //     { letter: "", state: "" },
  //     { letter: "", state: "" },
  //     { letter: "", state: "" },
  //     { letter: "", state: "" },
  //     { letter: "", state: "" },
  //   ],
  //   [
  //     { letter: "", state: "" },
  //     { letter: "", state: "" },
  //     { letter: "", state: "" },
  //     { letter: "", state: "" },
  //     { letter: "", state: "" },
  //   ],
  // ]);

  //const inputRef = useRef(null);
  return (
    <>
      <h1 className='text-green-700 bg-green-500 text-center m-6'>
        MACY'S WORDLE
      </h1>
      <div className='flex flex-row justify-center flex-wrap w-96 m-auto'>
        {allData.map((element, index) => {
          return element.map((item, num) => {
            switch (item.state) {
              case "":
                return <input type='text' className={inputStyle} />;

              case "typing":
                return (
                  <div
                    className={`${boxStyle} border-darkGray bg-white text-black`}
                  >
                    {item.letter}
                  </div>
                );

              case "green":
                return (
                  <div
                    className={`${boxStyle} border-green bg-green text-white`}
                  >
                    {item.letter}
                  </div>
                );

              case "yellow":
                return (
                  <div
                    className={`${boxStyle} border-yellow bg-yellow text-white`}
                  >
                    {item.letter}
                  </div>
                );

              case "gray":
                return (
                  <div
                    className={`${boxStyle} border-darkGray bg-darkGray text-white`}
                  >
                    {item.letter}
                  </div>
                );
            }
          });
        })}
      </div>
    </>
  );
}

export default App;
