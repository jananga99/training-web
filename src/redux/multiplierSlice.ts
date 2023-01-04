import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export const multiplierSlice = createSlice({
    name: 'multiplier',
    initialState: {
        value: 1
    },
    reducers: {
        multiply: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value *= 2
        },
        divide: (state) => {
            state.value /= 2
        },
        multiplyByAmount: (state, action: PayloadAction<number>) => {
            state.value *= action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { multiply, divide, multiplyByAmount} = multiplierSlice.actions

export default multiplierSlice.reducer