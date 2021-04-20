import {counterReducer} from "./counterReducer";
import {combineReducers, createStore} from "redux";
import {TypedUseSelectorHook, useSelector} from "react-redux";


const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

export const useTypedSelector: TypedUseSelectorHook<AppRootStateType> = useSelector