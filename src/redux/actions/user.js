import { GET_USER } from '../constants';

export const setUser = (data) => {

    return {
        type: GET_USER,
        user: data,
    }

};

