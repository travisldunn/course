import React, { useState } from "react";
import { winner } from "../helpers/winner";

const TicTacToe = () => {
  const [boards, setBoard] = useState([{ board: new Array(9).fill(null) }]);
  const [step, setStep] = useState(0);

  const handleClick = (i) => {
    const currentBoard = [...boards[step].board];

    if (currentBoard[i] || winner(currentBoard)) return;
    currentBoard[i] = step % 2 === 0 ? "X" : "O";

    setBoard([...boards.slice(0, step + 1), { board: currentBoard }]);
    setStep((step) => step + 1);
  };

  const renderSquare = (i) => {
    return (
      <button onClick={() => handleClick(i)}>{boards[step].board[i]}</button>
    );
  };

  const won = winner(boards[step].board);

  return (
    <div className="ttt">
      <div className="board">
        <p>
          Player
          {won ? ` ${won} wins!` : `${step % 2 === 0 ? " X's" : " O's"} turn`}
        </p>
        <div>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="steps">
        {boards.map((s, i) => (
          <div key={i} onClick={() => setStep(i)}>
            {i ? `Go to step # ${i}` : "Go to start"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
