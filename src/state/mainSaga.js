import {all} from 'redux-saga/effects'

import {gameLoop} from './game.js'

export default function () {
  return function* () {
    yield all([
      gameLoop()
    ])
  }
}