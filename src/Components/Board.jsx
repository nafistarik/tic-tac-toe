import { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = useState([
    { value: null, id: "1" },
    { value: null, id: "2" },
    { value: null, id: "3" },
    { value: null, id: "4" },
    { value: null, id: "5" },
    { value: null, id: "6" },
    { value: null, id: "7" },
    { value: null, id: "8" },
    { value: null, id: "9" },
  ]);

  const [nextValue, setNextValue] = useState("X");

  const winningTriplets = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = () => {
    for (let i = 0; i < winningTriplets.length; i++) {
      const [a, b, c] = winningTriplets[i];
      if (
        squares[a].value &&
        squares[a].value === squares[b].value &&
        squares[a].value === squares[c].value
      ) {
        return squares[a].value;
      }
    }
    return null;
  };

  const [status, setStatus] = useState("This is your turn, X!");

  const handleClick = (id) => {
    nextValue === "X"
      ? setStatus("This is your turn, O!")
      : setStatus("This is your turn, X!");

    setSquares(
      squares.map((square) => {
        if (square.id === id && square.value === null) {
          setNextValue(nextValue === "X" ? "O" : "X");

          return { ...square, value: nextValue };
        }
        return square;
      })
    );
  };

  if (calculateWinner()) {
    setStatus(`${calculateWinner()} won the game!`);
    setSquares(squares.map((square) => ({ ...square, value: null })));
  }

  if (
    calculateWinner() === null &&
    squares.every((square) => square.value !== null)
  ) {
    setStatus("It's a draw!");
    setSquares(squares.map((square) => ({ ...square, value: null })));
  }

  return (
    <div className="flex flex-col justify-center items-center h-lvh bg-[url('/cream-color-background-hzztm89n4et2pj3m.jpg')]">
      <h1 className="text-5xl text-red-800  font-bold ">Tic Tac Toe</h1>
      <div className="grid grid-cols-3 gap-2 w-fit p-4 m-6 justify-center items-center rounded-3xl bg-orange-100 border-4  border-red-800 ">
        {squares.map((square) => (
          <Square
            value={square.value}
            key={square.id}
            handleClick={handleClick}
            id={square.id}
          />
        ))}
      </div>
      <div className="text-2xl text-red-800  font-bold text-center">
        {status}
      </div>
    </div>
  );
}
