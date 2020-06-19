import { createStore, combineReducers, applyMiddleware } from 'redux';
import allUsersReducer from '../reducers/allUsersReducer';
import { createEpicMiddleware } from 'redux-observable';
import { reducer, counter, userDataReducer }  from '../redux-actions/search';

export const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers(
    {
        allUsers: allUsersReducer,
        reducer,
        counter,
        userDataReducer,
    }
);

const configureStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(epicMiddleware)
    );
};

export default configureStore;
