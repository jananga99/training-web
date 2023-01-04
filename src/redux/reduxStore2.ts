import { createSlice } from '@reduxjs/toolkit';
import {Action} from "redux";

const initialStateUser = {
    nickname: ''
};

interface StateUser {
    nickname: string;
}

interface SetUserAction extends Action {
    type: 'SET_USER';
    payload: string;
}

interface ClearUserAction extends Action {
    type: 'CLEAR_USER';
}

type ActionTypes = SetUserAction | ClearUserAction;

const initialStateDiaryCardList = {
    cardList: []
};

interface DiaryEntry {
    title: string,
    subtitle: string,
    description: string,
    color: string
}

interface StateDiaryCardList {
    cardList: DiaryEntry[];
}

interface AddAction extends Action {
    type: 'ADD';
    payload: {
        title: string,
        subtitle: string,
        description: string,
        color: string
    };
}

type ActionTypes2 = AddAction;

const userSlice = createSlice({
    initialState: initialStateUser,
    name: 'users',
    reducers: {
        setUser: (state, action)=>{
            state.nickname = action.payload
        }
    }
})