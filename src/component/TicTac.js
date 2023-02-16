import React, { useState } from "react";
import Square from "./Square";
import { ImCross } from "react-icons/im";
import { VscCircleLargeFilled } from "react-icons/vsc";
function TicTac() {
  const [state, setState] = useState(Array(9).fill(null));
  const [x, setx] = useState(true);
  let handelChange = (index) => {
    if(state[index] !== null){
    return
    }
    const copyState = [...state];
    copyState[index] = x ? "X" : "O";
    setState(copyState);
    setx(!x);
  };
    

  const winner = () => {
    const winnerLogic = [
      [3, 4, 5],
      [0, 1, 2],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winnerLogic.length; i++) {
      const [a, b, c] = winnerLogic[i];
      console.log(winnerLogic);

      if (
        state[a] !== null &&
        state[a] === state[b] &&
        state[a] === state[c] &&
        state[a] === state[b]
      ) {
        return true;
      }
    }
    return false;
  };


  const reset = () => {
    setState(Array(9).fill(null));
}




let iswinner = winner();
  return (
    <>
      {iswinner ? (
        <div>
          <h1 className="flex text-center text-3xl mt-20  font-semibold justify-center ">
            Congregulation you won 👌🤞👍
          </h1>

          <span className="flex justify-center my-6">
            <button onClick={reset} className=" bg-sky-300 p-1 rounded-md font-semibold text-lg">Play again</button>
          </span>
        </div>
      ) : (
        <div>
          <div className="flex justify-center mt-10 text-5xl">
            <h1 className="my-4 font-bold text-blue-600">TIC TAC TOE</h1>
          </div>
          <div className="flex justify-center text-3xl text-sky-600 ">
            <span className="mx-1">
              <ImCross></ImCross>
            </span>
            <span className="mx-1">
              <VscCircleLargeFilled />
            </span>
          </div>
          <div className=" flex mt-16 items-center justify-center text-center font-semibold ">
            <div className="">
              <Square
                onClick={() => {
                  handelChange(0);
                }}
                value={state[0]}
              ></Square>
              <Square
                onClick={() => {
                  handelChange(1);
                }}
                value={state[1]}
              ></Square>
              <Square
                onClick={() => {
                  handelChange(2);
                }}
                value={state[2]}
              ></Square>
            </div>
            <div className="">
              <Square
                onClick={() => {
                  handelChange(3);
                }}
                value={state[3]}
              ></Square>
              <Square
                onClick={() => {
                  handelChange(4);
                }}
                value={state[4]}
              ></Square>
              <Square
                onClick={() => {
                  handelChange(5);
                }}
                value={state[5]}
              ></Square>
            </div>
            <div className="">
              <Square
                onClick={() => {
                  handelChange(6);
                }}
                value={state[6]}
              ></Square>
              <Square
                onClick={() => {
                  handelChange(7);
                }}
                value={state[7]}
              ></Square>
              <Square
                onClick={() => {
                  handelChange(8);
                }}
                value={state[8]}
              ></Square>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TicTac;
