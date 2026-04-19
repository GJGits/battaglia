export interface GameBoardConfig {
  width: number;
  height: number;
  playerCount?: number;
  cardSize?: { width: number; height: number };
}

/**
 * Inizializza la configurazione del campo da gioco
 */
export const initializeGameBoard = (config: Partial<GameBoardConfig>): GameBoardConfig => {
  return {
    width: config.width || 800,
    height: config.height || 600,
    playerCount: config.playerCount || 4,
    cardSize: config.cardSize || { width: 80, height: 120 },
  };
};
