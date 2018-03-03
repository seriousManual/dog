import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { delay } from "redux-saga" 
import { updateDiAction } from "./dice"

export function* gameLoop() {
    while (true) {
    // dispatch action: next player
    // yield wait until roll dice pushed
    // update dice - > function here
    yield delay(1000);
    yield put(updateDiAction(generateDice()));
    // dispatch action: updateDiAction
    // dispatch action: highlight possible moves
    // yield wait for choice    
    // dispatch action: unhighlight
    // displace action: move piece
    // displace action: update pieces
    // displace action: update gamestate (check if somebody won)
    }

}

function generateDice() {
    console.log("yoyoyoy");
    return Math.ceil(Math.random() * 5)
}