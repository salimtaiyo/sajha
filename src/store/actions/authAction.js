import { GET_ERRORS, LOGIN_USER } from './types';
import axios from 'axios';


export const signUser = (userData,history) => dispatch => {
    axios.post(`http://localhost:5000/signup`, userData)
        .then(res => history.push('/'))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

export const loginUser = (userData) => dispatch => {
    axios.post('http://localhost:5000/login',userData)
        .then( res => dispatch({
            type: LOGIN_USER,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
} 