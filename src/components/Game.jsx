import React, { useState } from 'react';
import GameLayout from './GameLayout';
import PropTypes from 'prop-types';

const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function Game() {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

  const handleCellClick = (index) => {
    if (field[index] !== '' || isGameEnded) return;

    const newField = [...field];
    newField[index] = currentPlayer;
    setField(newField);

    // Check for winner
    const winner = checkWinner(newField);
    if (winner) {
      setIsGameEnded(true);
      setCurrentPlayer(winner);
      return;
    }

    // Check for draw
    if (newField.every(cell => cell !== '')) {
      setIsDraw(true);
      setIsGameEnded(true);
      return;
    }

    // Switch player
    setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
  };

  const checkWinner = (fieldArray) => {
    for (const pattern of WIN_PATTERNS) {
      const [a, b, c] = pattern;
      if (fieldArray[a] && fieldArray[a] === fieldArray[b] && fieldArray[a] === fieldArray[c]) {
        return fieldArray[a];
      }
    }
    return null;
  };

  const handleReset = () => {
    setCurrentPlayer('X');
    setIsGameEnded(false);
    setIsDraw(false);
    setField(['', '', '', '', '', '', '', '', '']);
  };

  return (
    <GameLayout>
      <GameLayout.Information
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
      <GameLayout.Field
        field={field}
        onCellClick={handleCellClick}
      />
      <button className="reset-button" onClick={handleReset}>
        Начать заново
      </button>
    </GameLayout>
  );
}

Game.propTypes = {};

export default Game;