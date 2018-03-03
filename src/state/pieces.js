import createAction from './util/createAction'

export const PIECE_STATE_INACTIVE = 'piece_state_inactive'
export const PIECE_STATE_ACTIVE = 'piece_state_active'
export const PIECE_STATE_HOME = 'piece_state_home'

export const ACTION_ADD_PIECE = 'piece_add_piece'
export const ACTION_SET_STATE = 'piece_set_state'
export const ACTION_SET_INDEX = 'piece_set_index'

export function setState(pieceId, state) {
  return createAction(ACTION_SET_STATE, {pieceId, state})
}

export function setIndex(pieceId, index) {
  return createAction(ACTION_SET_INDEX, {pieceId, index})
}

function getInitialState() {
  return [
    {pieceId: 0, index: null, state: PIECE_STATE_INACTIVE, player: 1},
    {pieceId: 1, index: null, state: PIECE_STATE_INACTIVE, player: 1},
    {pieceId: 2, index: null, state: PIECE_STATE_INACTIVE, player: 1},
    {pieceId: 3, index: null, state: PIECE_STATE_INACTIVE, player: 1},
    {pieceId: 4, index: null, state: PIECE_STATE_INACTIVE, player: 2},
    {pieceId: 5, index: null, state: PIECE_STATE_INACTIVE, player: 2},
    {pieceId: 6, index: null, state: PIECE_STATE_INACTIVE, player: 2},
    {pieceId: 7, index: null, state: PIECE_STATE_INACTIVE, player: 2},
    {pieceId: 8, index: null, state: PIECE_STATE_INACTIVE, player: 3},
    {pieceId: 9, index: null, state: PIECE_STATE_INACTIVE, player: 3},
    {pieceId: 10, index: null, state: PIECE_STATE_INACTIVE, player: 3},
    {pieceId: 11, index: null, state: PIECE_STATE_INACTIVE, player: 3},
    {pieceId: 12, index: null, state: PIECE_STATE_INACTIVE, player: 4},
    {pieceId: 13, index: null, state: PIECE_STATE_INACTIVE, player: 4},
    {pieceId: 14, index: null, state: PIECE_STATE_INACTIVE, player: 4},
    {pieceId: 15, index: null, state: PIECE_STATE_INACTIVE, player: 4}
  ]
}

export default function reducer(state=getInitialState(), action) {
  switch (action.type) {
    case ACTION_SET_INDEX:
      return state.map(piece => {
        if (piece.pieceId !== action.pieceId) return piece

        return {...piece, index: action.index}
      })

    case ACTION_SET_STATE:
      return state.map(piece => {
        if (piece.pieceId !== action.pieceId) return piece

        return {...piece, state: action.state}
      })

    default:
      return state
  }
}