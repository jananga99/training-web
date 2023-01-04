import {Action, createStore, Reducer} from 'redux';

const initialState = {
    count: 0
};

interface State {
    count: number;
}

interface SetCountAction extends Action {
    type: 'SET_COUNT';
    payload: number;
}

interface IncrementAction extends Action {
    type: 'INCREMENT';
}

interface DecrementAction extends Action {
    type: 'DECREMENT';
}

type ActionTypes = SetCountAction | IncrementAction | DecrementAction;

const reducer: Reducer<State, ActionTypes> = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

// store.dispatch({ type: 'INCREMENT' });
// console.log(store.getState()); // { count: 1 }
//
// store.dispatch({ type: 'INCREMENT' });
// console.log(store.getState()); // { count: 2 }
//
// store.dispatch({ type: 'DECREMENT' });
// console.log(store.getState()); // { count: 1 }


export default store;
