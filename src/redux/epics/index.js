import { combineEpics } from 'redux-observable';
import { fetchUserEpic } from '../redux-actions/search';

export default combineEpics(
    fetchUserEpic
);


