# dog

````

const CARD_SEVEN = 'seven';
const CARD_ELEVEN_ONE_PLAY = 'eleven_one_play';

const pieceState = {
  state: 'INACTIVE' || 'ACTIVE' || 'HOME',
  index: null
};

const playerState = {
  color: 'red',
  name: 'russell',
  piece1: pieceState,
  piece2: pieceState,
  piece3: pieceState,
  piece4: pieceState,
  cards: [
    CARD_SEVEN
  ]
};

const deckState = [
  CARD_ELEVEN_ONE_PLAY,
  CARD_SEVEN
];

const gameState = {
  currentTurn: 0,
  currentPlayer: 0
};

const globalState = {
  gameState,
  deckState,
  p1: playerState,
  p2: playerState,
  p3: playerState,
  p4: playerState
};

````