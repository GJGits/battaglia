import React, { useEffect, useState } from 'react';
import * as styles from './GameBoard.module.css';
import { initializeGameBoard } from './GameBoard.logic';

interface GameBoardProps {
  width?: number;
  height?: number;
}

const GameBoard: React.FC<GameBoardProps> = ({ width = 800, height = 600 }) => {
  const [config, setConfig] = useState<any>(null);

  useEffect(() => {
    const boardConfig = initializeGameBoard({ width, height });
    setConfig(boardConfig);
  }, [width, height]);

  return (
    <div className={styles.gameBoardContainer}>
      <div className={styles.gameBoard} style={{ width, height }}>
        <div className={styles.felt}>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;