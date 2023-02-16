import React from "react";

function Square({value,onClick}) {
  return (
    <div
      onClick={onClick}
      className="squire text-5xl font-semibold border-blue-500 border  w-36 h-32   flex justify-center text-center  items-center align-middle"
    >
      <h1 className=" text-sky-600 ">{value}</h1>
    </div>
  );
}

export default Square;
