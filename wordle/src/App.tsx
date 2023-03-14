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

  const inputRef = useRef(null);
  return (
    <>
      <h1 className='text-green-700 bg-green-500 text-center m-6'>
        MACY'S WORDLE
      </h1>
      <div className='flex flex-row justify-center flex-wrap w-1/2 m-auto'>
        {allData.map((element, index) => {
          return element.map((item, num) => {
            if (item.state === "" && item.letter === "") {
              return <input type='text' className={inputStyle}></input>;
            } else if (item.state === "" && item.letter !== "") {
              return (
                <div
                  className='box-border w-16 h-16 border-solid border-2
              m-1 flex items-center justify-center
              border-darkGray bg-white text-black'
                >
                  {item.letter}
                </div>
              );
            } else if (item.state === "green") {
              return (
                <div
                  className='box-border w-16 h-16 border-solid border-2
            m-1 flex items-center justify-center
            border-green bg-green text-white'
                >
                  {item.letter}
                </div>
              );
            } else if (item.state === "yellow") {
              return (
                <div
                  className='box-border w-16 h-16 border-solid border-2
        m-1 flex items-center justify-center
        border-yellow bg-yellow text-white'
                >
                  {item.letter}
                </div>
              );
            } else if (item.state === "gray") {
              return (
                <div
                  className='box-border w-16 h-16 border-solid border-2
        m-1 flex items-center justify-center
        border-darkGray bg-darkGray text-white'
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
