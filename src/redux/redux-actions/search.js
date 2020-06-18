import { createAction, handleActions } from 'redux-actions';
import { ofType } from "redux-observable";
import { mergeMap, map } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

export const loading = createAction('LOADING');

export const reducer = handleActions(
    {
        [loading]: state => ({ ...state, loader: true }),
    },
    { loader: false }
);


// action creators
const fetchUserFulfilled = payload => ({ type: 'FETCH_USER_FULFILLED', payload });
// const fetchUserFailed = payload => ({ type: 'FETCH_USER_FULFILLED', payload });
const loader = true;
console.log(loader);
// epic
export const fetchUserEpic = action$ => action$.pipe(
    ofType(loading.type),
    mergeMap(action =>
        ajax.getJSON(`https://api.github.com/users/${action.payload}`).pipe(
            map(response => fetchUserFulfilled(response)),
        )
    )
);


