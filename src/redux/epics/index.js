import { combineEpics } from 'redux-observable';
import { fetchUserEpic, countEpic } from '../redux-actions/search';

export default combineEpics(
    fetchUserEpic,
    countEpic
);


