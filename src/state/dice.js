import createAction from "./util/createAction";

export function getInitialDiceState() { 
    return  {value: null};
}


/////////// Actions ///////////
export const ACTION_UPDATE_DI = "action_update_di";
///////////////////////////////

export function reducer(state = getInitialDiceState(), action) { 
    console.log(action)
    switch(action.type) {
        case ACTION_UPDATE_DI:
            return {value: action.value};
        default: 
            return state;
    }
}

export function updateDiAction(value) {
    return createAction(ACTION_UPDATE_DI, {value})
}
