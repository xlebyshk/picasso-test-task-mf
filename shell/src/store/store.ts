import { combineReducers, configureStore} from "@reduxjs/toolkit";
import counterSlice from "./reducers/counterSlice";

const rootReducer = combineReducers(({
    counter: counterSlice
}))

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']