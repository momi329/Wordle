import React from "react";
import { useState, useRef, useEffect } from "react";
const answer = ["H", "A", "P", "P", "Y"];
const stateClassName: { [key: string]: string } = {
  gray: " border-darkGray bg-darkGray text-white",
  green: " border-green bg-green text-white",
  yellow: " border-yellow bg-yellow text-white",
  typing: " border-darkGray bg-white text-black",
  nothing:
    "box-border w-16 h-16 border-solid border-2 m-1 flex items-center justify-center border-gray bg-white text-black text-center",
  boxStyle:
    "box-border w-16 h-16 border-solid border-2 m-1 flex items-center justify-center",
};

function App() {
  const [currentLine, setCurrentLine] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const inputRefs = useRef<any[]>([]);
  const [allData, setAllData] = useState<string[][]>([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);

  const handleGuessChange = (index: number, num: number, input: string) => {
    console.log(input);
    const newData = [...allData];
    newData[index][num] = input.toUpperCase();
    setAllData(newData);
    if (input !== "" && num < answer.length + 1) {
      return num + 1 === 5
        ? inputRefs.current[index]
        : inputRefs.current[index][num + 1].focus();
    }
  };
  const keyChange = (
    index: number,
    num: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    //輸入 退回 提交
    //輸入
    if (event.key === "Enter") {
      if (allData[index].every((i: string) => i !== "")) {
        setCurrentLine((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
        inputRefs.current[index + 1][0].focus();
      }
    } else if (event.key === "Backspace") {
      const newData = [...allData];
      console.log(`${index} ${num}`);
      newData[index][num] = "";
      setAllData(newData);
      if (num > 0) {
        //inputRefs.current[index][num].current.blur();
        inputRefs.current[index][num - 1].focus();
      }
      console.log("deleted");
    }
  };
  useEffect(() => {
    inputRefs.current[0][0]?.focus();
  }, []);
  return (
    <>
      <h1 className='text-green-700 bg-green-500 text-center m-6'>
        MACY'S WORDLE
      </h1>
      <div className='flex flex-row justify-center flex-wrap w-96 m-auto'>
        {allData.map((element, index) => {
          let stateClass: string = "";
          return element.map((item, num) => {
            if (item === "" && !currentLine[index]) {
              stateClass = stateClassName.nothing;
            } else if (item !== "" && !currentLine[index]) {
              stateClass = stateClassName.typing;
            } else if (item === answer[num] && currentLine[index]) {
              stateClass = stateClassName.green;
            } else if (
              item !== answer[num] &&
              answer.includes(item) &&
              currentLine[index]
            ) {
              stateClass = stateClassName.yellow;
            } else {
              stateClass = stateClassName.gray;
            }
            return (
              <div
                key={`${index}-${num}`}
                className={`${stateClassName.boxStyle} ${stateClass}`}
              >
                {currentLine[index] === false || item === "" ? (
                  <input
                    type='text'
                    maxLength={1}
                    key={`${index}-${num}`}
                    className={`${stateClassName.boxStyle} ${stateClass}`}
                    ref={(input) => {
                      if (!inputRefs.current[index]) {
                        inputRefs.current[index] = [];
                      }
                      inputRefs.current[index][num] = input;
                    }}
                    onChange={(e) => {
                      const rule: RegExp = /^[A-Za-z]{1}$/;
                      if (rule.test(e.target.value)) {
                        handleGuessChange(index, num, e.target.value);
                        e.target.value = e.target.value.toUpperCase();
                      }
                    }}
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                      keyChange(index, num, e);
                    }}
                    value={item}
                  />
                ) : (
                  <input
                    value={item}
                    className={`${stateClassName.boxStyle} ${stateClass}`}
                    readOnly={currentLine[index]}
                  />
                )}
              </div>
            );
          });
        })}
      </div>
    </>
  );
}

export default App;
