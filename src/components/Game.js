import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helpers.js";

const style = {
  width: "200px",
  margin: "20px auto",
};

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) {
      return;
    }
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const renderMoves = () => {
    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={() => setBoard(Array(9).fill(null))}>
          Reset Game
        </button>
      </div>
    );
  };
  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div style={style}>
        <p style={{ textAlign: "center" }}>
          {winner
            ? `Winner: ` + winner
            : `Next Player: ` + (xIsNext ? "X" : "O")}
        </p>
        {renderMoves()}
      </div>
    </>
  );
}

export default Game;
