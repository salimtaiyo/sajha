import { LOGIN_USER } from '../actions/types';

const initialState = {
    isAuthenticated: false,
    user:{}
}

export default function(state= initialState, action){
    switch(action.type){
        case LOGIN_USER:
            return state;
            
        default:
            return state;
    }
}