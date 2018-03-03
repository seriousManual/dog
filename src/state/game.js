import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { delay } from "redux-saga" 
import { updateDiAction } from "./dice"

export function* gameLoop() {
    while (true) {
    // dispatch action: next player
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