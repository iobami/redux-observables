import { GET_ALL_USERS } from '../constants';

const initialState = {
    allUsers: [],
};

const allUsersReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                allUsers: action.allUsers,
            };
        default:
            return state;
    }
};
export default allUsersReducer;
