import React from 'react';
import styles from './GameBoard.module.css';
import * as gameBoardLogic from './GameBoard.logic';

interface GameBoardProps {
  width?: number;
  height?: number;
}

const GameBoard: React.FC<GameBoardProps> = ({ width = 800, height = 600 }) => {
  React.useEffect(() => {
    gameBoardLogic.initializeGameBoard();
  }, []);

  return (
    <div className={styles.gameBoardContainer}>
      <div className={styles.gameBoard} style={{ width, height }}>
        <div className={styles.felt}>
          {/* Game board content will go here */}
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
