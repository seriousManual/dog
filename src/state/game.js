import { put, call, select } from 'redux-saga/effects'
import { delay } from "redux-saga" 
import { updateDiAction } from "./dice"
import { updateTurnAction, updatePlayerAction } from "./gameState"
import { getCurrentPlayerIndex, getCurrentTurn } from './selectors'

import {highlightPiece, unHighlightPieces} from './pieces'
import {movement, highlightPossibleMoves} from './pieces'

export function* gameLoop() {
    while (true) {
    yield delay(1000);
    // dispatch action: next player

    var nextPlayerIndex = yield call(nextPlayer);
    yield put(updatePlayerAction(nextPlayerIndex));
    // if next player is 0 then we are at the next tturn
    var nextTurnIndex = yield call(nextTurn);
    yield put(updateTurnAction(nextTurnIndex));
    // yield wait until roll dice pushed
    yield put(updateDiAction(generateDice()));
    yield delay(3000);
    // dispatch action: highlight possible moves
    // yield wait for choice    
    // dispatch action: unhighlight
    // displace action: move piece
    // displace action: update pieces
    // displace action: update gamestate (check if somebody won)

    }

}

function generateDice() {
    return Math.floor(Math.random() * 6) + 1
}

function* nextPlayer() {
    var currentPlayerIndex = yield select(getCurrentPlayerIndex);
    var newIndex = (currentPlayerIndex + 1) % 4;
    return newIndex;
}

function* nextTurn() {
    var currentTurn = yield select(getCurrentTurn);
    return currentTurn + 1
}