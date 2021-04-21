import {counterReducer} from "./counterReducer";
import {combineReducers, createStore} from "redux";

const rootReducer = combineReducers({
    counter: counterReducer
})

let preloadedState;
const persistedTodoString = localStorage.getItem('counter-state');
if(persistedTodoString) {
    preloadedState = JSON.parse(persistedTodoString)
}

export const store = createStore(rootReducer, preloadedState);

store.subscribe(() => {
            localStorage.setItem('counter-state', JSON.stringify(store.getState()));

} )

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppStoreType = typeof store;
