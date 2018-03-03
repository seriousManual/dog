import {combineReducers} from 'redux'

import players from './players'
import pieces from './pieces'
import {reducer as dice} from './dice'

export default combineReducers({
  //gameState,
  //deckState,
  players,
  pieces,
  dice
})