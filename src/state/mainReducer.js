import {combineReducers} from 'redux'

import players from './players'
import pieces from './pieces'
import {reducer as dice} from './dice'
import {reducer as gameState} from './gameState'
import fields from './fields'

export default combineReducers({
  gameState,
  //deckState,
  players,
  pieces,
  dice,
  fields
})