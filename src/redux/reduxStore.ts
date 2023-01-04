import {Action, combineReducers, createStore, Reducer} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

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

const userReducer: Reducer<StateUser, ActionTypes> = (state = initialStateUser, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                nickname: action.payload
            };
        case 'CLEAR_USER':
            return {
                nickname: ''
            };
        default:
            return state;
    }
}

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

const DiaryCardListReducer: Reducer<StateDiaryCardList, ActionTypes2> = (state = initialStateDiaryCardList, action) => {
    switch (action.type) {
        case 'ADD':
            state.cardList.push({
                title: action.payload.title,
                subtitle: action.payload.subtitle,
                description: action.payload.description,
                color: action.payload.color
            });
            return state;
        default:
            return state;
    }
}


const reducer = combineReducers({
    users: userReducer,
    diaryCardList: DiaryCardListReducer
});
const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer);
export let persistor = persistStore(store);

// export default store;