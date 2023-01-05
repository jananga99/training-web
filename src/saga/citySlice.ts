import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {City} from "./City";



export interface cityState {
    loading: boolean;
    list: City[];
}

const initialState: cityState = {
    loading: false,
    list: [],
};

const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        fetchCityList(state) {
            console.log("in fetch city list")
            state.loading = true;
        },
        fetchCityListSuccess(state, action: PayloadAction<City[]>) {
            console.log("in fetch city success")
            state.loading = false;
            state.list = action.payload;
        },
        fetchCityListFailed(state) {
            state.loading = false;
        },
    },
});

export const {fetchCityList, fetchCityListSuccess, fetchCityListFailed} = citySlice.actions
// Reducer
const cityReducer = citySlice.reducer;
export default cityReducer;