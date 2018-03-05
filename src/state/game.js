import { put, call, select, take } from 'redux-saga/effects'
import { delay } from "redux-saga" 
import { updateDiAction } from "./dice"
import { updateTurnAction, updatePlayerAction } from "./gameState"
import { getCurrentPlayerIndex, getCurrentTurn } from './selectors'

import {highlightPiece, unHighlightPieces} from './pieces'
import {ACTION_SELECT_PIECE, movement, highlightPossibleMoves} from './pieces'

export function* gameLoop() {
    while (true) {
    yield delay(1000);
    // dispatch action: next player

    var nextPlayerIndex = yield call(nextPlayer);
    yield put(updatePlayerAction(nextPlayerIndex));
    // if next player is 0 then we are at the next turn
    var nextTurnIndex = yield call(nextTurn);
    yield put(updateTurnAction(nextTurnIndex));
    // yield wait until roll dice pushed
    let diceRoll = generateDice()
    yield put(updateDiAction(diceRoll));

    // dispatch action: highlight possible moves
    // let {pieceId} = yield take(ACTION_SELECT_PIECE)
    // yield put(unHighlightPieces())
    // yield call(movement(pieceId, diceRoll))
    // displace action: update pieces
    // displace action: update gamestate (check if somebody won)
    }
}

function generateDice() {
    return Math.floor(Math.random() * 6) + 1
}

function* nextPlayer() {
    var currentPlayerIndex = yield select(getCurrentPlayerIndex);
    var incrementAndWrap = ++currentPlayerIndex % 4;
    return incrementAndWrap
}

function* nextTurn() {
    var currentPlayerIndex = yield select(getCurrentPlayerIndex);
    var currentTurn = yield select(getCurrentTurn);
    var newTurnIndex = currentTurn;
    if (currentPlayerIndex == 0) {
        newTurnIndex++;
    }
    return newTurnIndex;
}