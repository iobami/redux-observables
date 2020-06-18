import { GET_ALL_USERS } from '../constants';

export const setAllUsers = (data) => {
    return {
        type: GET_ALL_USERS,
        allUsers: data,
    }
};
