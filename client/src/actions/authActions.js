import axios from 'axios';
import { setAlert } from "./alertActions";
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from "./types";
import setAuthToken from '../utils/setAuthToken';

export const loadUser = () => async dispatch => {

    // Save the token to the axios header:  x-auth-token
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    //If there is no token then use api route GET api/auth to retrive token
    try{
        // returns user data  minus the password
        const res = await axios.get('/api/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    }catch (e) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};

// Register User
export const register = ({ first_name, last_name, email, password }) => async dispatch=>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ first_name, last_name, email, password});

    try{
        const res = await axios.post('/api/users', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());
    }catch (e) {
        // For any given error message then display the error
        const errors = e.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        // Remove any current token
        dispatch({
            type: REGISTER_FAIL
        })
    }
};

// Login User
export const login = ( email, password ) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({email, password});

    try{
        const res = await axios.post('/api/auth', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    }catch (e) {
        // For any given error message then display the error
        const errors = e.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'error')));
        }
        // Remove any current token
        dispatch({
            type: LOGIN_FAIL
        })
    }
};


//LOGOUT
export const logout = () => dispatch =>{
    dispatch({
        type: LOGOUT
    });
};
