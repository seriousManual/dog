import createAction from './util/createAction'

export const PIECE_STATE_INACTIVE = 'piece_state_inactive'
export const PIECE_STATE_ACTIVE = 'piece_state_active'
export const PIECE_STATE_HOME = 'piece_state_home'

export const ACTION_ADD_PIECE = 'piece_add_piece'
export const ACTION_SET_STATE = 'piece_set_state'
export const ACTION_SET_INDEX = 'piece_set_index'
export const ACTION_HIGHLIGHT_PIECE = 'piece_highlight_piece'
export const ACTION_UNHIGHLIGHT_PIECES = 'piece_unhighlight_pieces'

export function setState(pieceId, state) {
  return createAction(ACTION_SET_STATE, {pieceId, state})
}

export function setIndex(pieceId, index) {
  return createAction(ACTION_SET_INDEX, {pieceId, index})
}

export function highlightPiece(pieceId) {
  return createAction(ACTION_HIGHLIGHT_PIECE, {pieceId})
}

export function unHighlightPieces() {
  return createAction(ACTION_UNHIGHLIGHT_PIECES)
}

function getInitialState() {
  let retVal = []

  for (var i = 0; i < 16; i++) {
    retVal.push({
      state: PIECE_STATE_INACTIVE,
      pieceId: i,
      index: null,
      playerId: Math.floor(i / 4) + 1,
      highlight: false
    })
  }

  return retVal
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

    case ACTION_HIGHLIGHT_PIECE:
      return state.map(piece => {
        if (piece.pieceId !== action.pieceId) return piece

        return {...piece, highlight: true}
      })

    case ACTION_UNHIGHLIGHT_PIECES:
      return state.map(piece => {
        if (!piece.highlight) return piece

        return {...piece, highlight: false}
      })

    default:
      return state
  }
}