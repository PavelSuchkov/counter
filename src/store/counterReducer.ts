import {AppRootStateType} from "./store";

export type initialStateType = typeof initialState

let initialState = {
    count: 0,
    startValue: 0,
    maxValue: 0,
    disableInc: true,
    disableReset: true,
    disableSet: false,
    error: false,
    red: false
}
export type incrementActionType = {
    type: 'INCREMENT'
}

export type resetActionType = {
    type: 'RESET'
}

export type changeStartValueActionType = {
    type: 'CHANGE-START-VALUE',
    newStartValue: number
}

export type changeMaxValueActionType = {
    type: 'CHANGE-MAX-VALUE',
    newMaxValue: number
}

export type setValueActionType = {
    type: 'SET-VALUE'
}

export type ActionsType = incrementActionType
                        | resetActionType
                        | changeStartValueActionType
                        | changeMaxValueActionType
                        | setValueActionType

export const counterReducer = (state: initialStateType = initialState,
                               action: ActionsType): initialStateType => {
    switch (action.type) {

        case "INCREMENT": {
            let stateCopy = {...state};
            stateCopy.count = stateCopy.count + 1;
            stateCopy.disableSet = true;
            stateCopy.red = false;
            if (stateCopy.count === stateCopy.maxValue){
                stateCopy.disableInc = true;
                stateCopy.red = true
            }
            return stateCopy
        }

        case "RESET": {
            let stateCopy = {...state};
            stateCopy.count = stateCopy.startValue;
            stateCopy.disableInc = false;
            stateCopy.red = false;
            return stateCopy
        }

        case "CHANGE-START-VALUE": {
            let stateCopy = {...state};
                stateCopy.startValue = action.newStartValue
            if (action.newStartValue < 0) {
                stateCopy.disableInc = true;
                stateCopy.disableSet = true;
                stateCopy.disableReset = true;
                stateCopy.error = true;
            } else if (action.newStartValue >= stateCopy.maxValue) {
                stateCopy.disableInc = true;
                stateCopy.disableSet = true;
                stateCopy.disableReset = true;
                stateCopy.error = true;
            } else {
                stateCopy.disableSet = false;
                stateCopy.error = false
            }
            return stateCopy
        }
        case "CHANGE-MAX-VALUE": {
            let stateCopy = {...state};
            stateCopy.maxValue = action.newMaxValue;
            if ( stateCopy.maxValue < 0  || stateCopy.maxValue <= stateCopy.startValue) {
                stateCopy.disableReset = true;
                stateCopy.disableInc = true;
                stateCopy.disableSet = true;
                stateCopy.error = true;
            } else {
                stateCopy.disableSet = false;
                stateCopy.error = false
            }
            return stateCopy
        }

        case "SET-VALUE": {
            let stateCopy = {...state};
            stateCopy.count = stateCopy.startValue;
            stateCopy.disableInc = false;
            stateCopy.disableReset = false;
            stateCopy.disableSet = true;
            stateCopy.red = false;
            return stateCopy;
        }
        default:
            return state
    }
}

export const increment = (): incrementActionType => {
        return { type: "INCREMENT" }
}

export const reset = (): resetActionType => {
    return {type: "RESET"}
}

export const changeStartValueAC = (newStartValue: number): changeStartValueActionType => {
    return {type: "CHANGE-START-VALUE", newStartValue}
}

export const changeMaxValueAC = (newMaxValue: number): changeMaxValueActionType => {
    return {type: "CHANGE-MAX-VALUE", newMaxValue }
}

export const setValue = ():setValueActionType => {
    return {type: "SET-VALUE"}
}