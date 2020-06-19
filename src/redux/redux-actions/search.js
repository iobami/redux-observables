import { createAction, handleActions } from 'redux-actions';
import { ofType } from "redux-observable";
import { mergeMap, switchMap, map, filter } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

export const loading = createAction('LOADING');
const success = createAction('SUCCESS');
export const userData = createAction('GET_USER_DATA');

export const reducer = handleActions(
    {
        [loading]: state => ({ ...state, loader: true }),
    },
    { loader: false }
);

export const counter = handleActions(
    {
        [success]: (state, action) => ({
            success: state.success = action.payload
        }),
        // [increment]: (state, action) => (console.log(state, action)),
    },
    { success: false }
);

export const userDataReducer = handleActions(
    {
        [userData]: (state, action) => ({
            gitHubInfo: state.gitHubInfo = action.payload
        }),
        // [userData]: (state, action) => (console.log(state, action)),
    },
    { gitHubInfo: {} }
);


// action creators
// const fetchUserFulfilled = payload => ({ type: 'FETCH_USER_FULFILLED', payload });

export const fetchUserEpic = action$ => action$.pipe(
    filter(action => action.type === 'LOADING'),
    switchMap((action) => {
        console.log(action);
        return ajax.getJSON(`https://api.github.com/users/${action.payload}`).pipe(
            map(response => userData(response)),
        );
        // return { type: 'INCREMENT', amount: 1 };
    }),
);

export const countEpic = action$ => action$.pipe(
    filter(action => action.type === 'NOT_LOADING'),
    // `mergeMap()` supports functions that return promises, as well as observables
    mergeMap(async (action) => {
        console.log('testing action', action);
        await new Promise(resolve => setTimeout(resolve, 1000));
        return { type: 'INCREMENT', amount: 1 };
    })
);
