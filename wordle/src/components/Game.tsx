import React from "react";
import { useState, useRef, useEffect, useReducer } from "react";
type ActionType = {
  type: string;
  payload: any;
};
type DataState = string[][];
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
const initialState: string[][] = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

function reducer(state: DataState, action: ActionType): DataState {
  switch (action.type) {
    case "PRESS_BACKSPACE": {
      const newState = [...state];
      newState[action.payload.index][action.payload.num] = "";
      if (action.payload.num > 0) {
        newState[action.payload.index][action.payload.num] = "";
        action.payload.inputRefs.current[action.payload.index][
          action.payload.num - 1
        ].focus();
      }
      return newState;
    }
    case "PRESS_CARACTER": {
      const newState = [...state];
      newState[action.payload.index][action.payload.num] =
        action.payload.input.toUpperCase();
      if (
        action.payload.input !== "" &&
        action.payload.num < answer.length + 1
      ) {
        if (action.payload.num < 4) {
          action.payload.inputRefs.current[action.payload.index][
            action.payload.num + 1
          ].focus();
        }
      }
      return newState;
    }
    default: {
      return state;
    }
  }
}

function Game() {
  const [currentLine, setCurrentLine] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [dataState, dispatch] = useReducer(reducer, initialState);

  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const inputRefs = useRef<any[]>([]);
  const handleGuessChange = (
    index: number,
    num: number,
    input: string,
    event: any
  ) => {
    if (event.key === "Enter") {
      if (dataState[index].every((data: string) => data !== "")) {
        setCurrentLine((prev) => {
          const newState = [...prev];
          newState[index] = true;
          inputRefs.current[index + 1][0].focus();
          return newState;
        });
        if (dataState[index].join("") === answer.join("")) {
          setIsCorrect(true);
        }
      }
    } else if (event.key === "Backspace") {
      dispatch({
        type: "PRESS_BACKSPACE",
        payload: {
          index: index,
          num: num,
          input: input,
          event: event,
          inputRefs: inputRefs,
        },
      });
    } else {
      dispatch({
        type: "PRESS_CARACTER",
        payload: {
          index: index,
          num: num,
          input: input,
          event: event,
          inputRefs: inputRefs,
        },
      });
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
        {dataState.map((element: string[], rowIndex: number) => {
          let stateClass: string = "";
          return element.map((letter, colomnIndex) => {
            if (currentLine[rowIndex]) {
              if (letter === answer[colomnIndex]) {
                stateClass = stateClassName.green;
              } else if (answer.includes(letter)) {
                stateClass = stateClassName.yellow;
              } else {
                stateClass = stateClassName.gray;
              }
            } else {
              letter === ""
                ? (stateClass = stateClassName.nothing)
                : (stateClass = stateClassName.typing);
            }

            return (
              <div
                key={`${rowIndex}-${colomnIndex}`}
                className={`${stateClassName.boxStyle} ${stateClass}`}
              >
                {currentLine[rowIndex] === false || letter === "" ? (
                  <input
                    type='text'
                    maxLength={1}
                    className={`${stateClassName.boxStyle} ${stateClass}`}
                    ref={(input) => {
                      if (!inputRefs.current[rowIndex]) {
                        inputRefs.current[rowIndex] = [];
                      }
                      inputRefs.current[rowIndex][colomnIndex] = input;
                    }}
                    onChange={(e) => {
                      const rule: RegExp = /^[A-Za-z]{1}$/;
                      if (rule.test(e.target.value)) {
                        handleGuessChange(
                          rowIndex,
                          colomnIndex,
                          e.target.value,
                          e
                        );
                      }
                    }}
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                      if (e.key === "Enter" || e.key === "Backspace") {
                        handleGuessChange(rowIndex, colomnIndex, e.key, e);
                      }
                    }}
                    value={letter}
                    readOnly={isCorrect}
                  />
                ) : (
                  <input
                    value={letter}
                    className={`${stateClassName.boxStyle} ${stateClass}`}
                    readOnly={currentLine[rowIndex]}
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
export default Game;
