import createAction from "./util/createAction";

export const ACTION_HIGHLIGHT_FIELD = 'field_highlight'
export const ACTION_UNHIGHLIGHT_FIELDS = 'field_unhighlight'

export function highlightField(fieldId) {
  return createAction(ACTION_HIGHLIGHT_FIELD, {fieldId})
}

export function unHighlightField(fieldId) {
  return createAction(ACTION_UNHIGHLIGHT_FIELDS, {fieldId})
}

function getInitialState() {
  let retVal = []

  for (var i = 0; i < 40; i++) {
    retVal.push({
      fieldIndex: i, 
      highlight: false,
      isStartPiece: i % 10 === 0,
      playerId: Math.floor(i / 10) + 1
    })
  }

  return retVal
}

export default function reducer(state=getInitialState(), action) {
  switch (action.type) {
    case ACTION_HIGHLIGHT_FIELD:
      return state.map(field => {
        if (field.fieldIndex !== action.fieldIndex) return field

        return {...field, highlight: true}
      })

    case ACTION_UNHIGHLIGHT_FIELDS:
      return state.map(field => {
        if (!field.highlight) return field

        return {...field, highlight: false}
      })
  }

  return state
}