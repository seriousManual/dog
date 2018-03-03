import {combineReducers} from 'redux'
import {reducer as dice} from './dice'
import {reducer as gameState} from './gameState'

export default combineReducers({dice, gameState})