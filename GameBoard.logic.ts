export interface GameBoardConfig {
  width: number;
  height: number;
  playerCount?: number;
  cardSize?: { width: number; height: number };
}

export interface PlayerPosition {
  playerId: number;
  x: number;
  y: number;
  rotation: number;
}

export interface CardPosition {
  cardId: string;
  x: number;
  y: number;
  zIndex: number;
  rotation: number;
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

/**
 * Calcola la posizione dei giocatori attorno al campo
 */
export const calculatePlayerPosition = (
  playerId: number,
  playerCount: number,
  boardWidth: number,
  boardHeight: number
): PlayerPosition => {
  const anglePerPlayer = (2 * Math.PI) / playerCount;
  const angle = anglePerPlayer * playerId;
  const radius = Math.min(boardWidth, boardHeight) / 2 - 100;
  const centerX = boardWidth / 2;
  const centerY = boardHeight / 2;

  return {
    playerId,
    x: centerX + radius * Math.cos(angle),
    y: centerY + radius * Math.sin(angle),
    rotation: (angle * 180) / Math.PI,
  };
};

/**
 * Calcola la posizione di una carta nel mazzo
 */
export const calculateCardPosition = (
  cardId: string,
  cardIndex: number,
  deckX: number,
  deckY: number,
  cardSpacing: number = 2
): CardPosition => {
  return {
    cardId,
    x: deckX + cardIndex * cardSpacing,
    y: deckY + cardIndex * cardSpacing,
    zIndex: cardIndex,
    rotation: (Math.random() - 0.5) * 5,
  };
};