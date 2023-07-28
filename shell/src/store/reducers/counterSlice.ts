import {createAction, createReducer, createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CounterState {
    count: number
}

const initialState: CounterState = {
    count: 0
}

export const increment = createAction('INCREMENT')
export const decrement = createAction('DECREMENT')

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.count += action.payload;
        },
        decrement(state,action: PayloadAction<number>) {
            state.count -= action.payload
        }
    }
})

/*export const counterSlice(initialState, {
    [increment]: function (state) {
        state.count = state.count + 1;
    },
    [decrement]: function (state) {
        state.count = state.count - 1;
    }
})*/

export default counterSlice.reducer;