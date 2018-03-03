import createAction from "./util/createAction";

export function getInitialGameState() { 
    return  { currentTurn: 0,
              currentPlayerIndex: 0
            };
}


/////////// Actions ///////////
export const ACTION_UPDATE_TURN = "action_update_turn";
export const ACTION_UPDATE_PLAYER = "action_update_player";
///////////////////////////////

export function reducer(state = getInitialGameState(), action) { 
    switch(action.type) {
        case ACTION_UPDATE_TURN:
            return {...state, currentTurn: action.value};
        case ACTION_UPDATE_PLAYER:
            return {...state, currentPlayerIndex: action.value};
        default: 
            return state;
    }
}

export function updateTurnAction(value) {
    return createAction(ACTION_UPDATE_TURN, {value})
}
export function updatePlayerAction(value) {
    return createAction(ACTION_UPDATE_PLAYER, {value})
}
