import { createStore, combineReducers, applyMiddleware } from 'redux';
import allUsersReducer from '../reducers/allUsersReducer';
import { createEpicMiddleware } from 'redux-observable';
import { reducer }  from '../redux-actions/search';
import rootEpic from '../epics';

const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers(
    {
        allUsers: allUsersReducer,
        reducer,
    }
);

const configureStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(epicMiddleware)
    );
};

epicMiddleware.run(rootEpic);

export default configureStore;
