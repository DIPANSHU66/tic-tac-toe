import React from "react";
import { useEffect,useState} from "react";
const Game = () => {
  
  function reset(){
    window.location.reload();
  }
let a="";let  b="";let  c=""; let k = true;
function  ai(e){a=(e.target.value);}
function  bi(e){b=e.target.value;}
  const[change,setChange]=useState('PLAY');
  

  const boxes = ["", "", "", "", "", "", "", "", ""];

  const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  let turn = true;

  function boxe(event) {
    if (event.target.textContent != "0" && event.target.textContent != "X") {
      if (turn) {
        (event.target.textContent = "0"),
          (turn = false),
          (boxes[event.target.tabIndex] = "0");
      } else {
        (event.target.textContent = "X"),
          (turn = true),
          (boxes[event.target.tabIndex] = "X");
      }
    }
    checkwin(event);
  }

  function checkwin(e) {
    if(k){k=!k;c=a;}
    else  {k=!k;c=b;}
    for (let p of winpatterns) {
      let v1 = boxes[p[0]];
      let v2 = boxes[p[1]];
      let v3 = boxes[p[2]];
      if (v1 != "" && v2 != "" && v3 != "") {
        if (v1 == v2 && v2 == v3) {alert(c);}
      }
    }
  }

  return  (<>
  <h1 className="text-1xl md:text-2xl font-bold underline flex flex-col md:flex-row items-center justify-center">
  <input
    onChange={ai}
    id="f"
    className="border-2 text-lg m-2 w-full md:w-44"
    type="text"
    name=""
    placeholder="first player"
  />
  <span className="mx-2">vs</span>
  <input
    onChange={bi}
    id="s"
    className="border-2 text-lg m-2 w-full md:w-44"
    type="text"
    placeholder="second player"
  />
</h1>
<div className="text-center">
  <h1 className="text-3xl font-bold underline">TIC-TAC-TOE</h1>

  <div className="grid grid-cols-3 gap-4 py-8 px-3">
    <div
      onClick={boxe}
      tabIndex={0}
      className="bg-blue-600 text-white py-4 px-3 rounded hover:bg-blue-400 text-4xl text-red-900 flex items-center justify-center"
    >
      {change}
    </div>
    <div
      onClick={boxe}
      tabIndex={1}
      className="bg-blue-600 text-white py-4 px-3 rounded hover:bg-blue-400 text-4xl text-red-900 flex items-center justify-center"
    >
      {change}
    </div>
    <div
      onClick={boxe}
      tabIndex={2}
      className="bg-blue-600 text-white py-4 px-3 rounded hover:bg-blue-400 text-4xl text-red-900 flex items-center justify-center"
    >
      {change}
    </div>
    <div
      onClick={boxe}
      tabIndex={3}
      className="bg-blue-600 text-white py-4 px-3 rounded hover:bg-blue-400 text-4xl text-red-900 flex items-center justify-center"
    >
      {change}
    </div>
    <div
      onClick={boxe}
      tabIndex={4}
      className="bg-blue-600 text-white py-4 px-3 rounded hover:bg-blue-400 text-4xl text-red-900 flex items-center justify-center"
    >
      {change}
    </div>
    <div
      onClick={boxe}
      tabIndex={5}
      className="bg-blue-600 text-white py-4 px-3 rounded hover:bg-blue-400 text-4xl text-red-900 flex items-center justify-center"
    >
      {change}
    </div>
    <div
      onClick={boxe}
      tabIndex={6}
      className="bg-blue-600 text-white py-4 px-3 rounded hover:bg-blue-400 text-4xl text-red-900 flex items-center justify-center"
    >
      {change}
    </div>
    <div
      onClick={boxe}
      tabIndex={7}
      className="bg-blue-600 text-white py-4 px-3 rounded hover:bg-blue-400 text-4xl text-red-900 flex items-center justify-center"
    >
      {change}
    </div>
    <div
      onClick={boxe}
      tabIndex={8}
      className="bg-blue-600 text-white py-4 px-3 rounded hover:bg-blue-400 text-4xl text-red-900 flex items-center justify-center"
    >
      {change}
    </div>
  </div>
  <button
    onClick={reset}
    type="button"
    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2"
  >
    Reset
  </button>
</div>
  </>);
};

export default Game;
