import axios from 'axios';
import {setAlert} from './alertActions';
import {GET_PROFILE, PROFILE_ERROR } from './types';
import {header} from "express-validator";

// GET Current user profile
export const getCurrentProfile = () => async dispatch =>{
    try {
        const res = await axios.get('/api/profile/me');

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    }catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status
            }
        });
    }
};


// Create or update a profile
export const createProfile = (formData, history, edit = false) => async dispatch => {
    try{
        const config = {
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
        }
        };
        console.warn(formData);
        const addressObj = {
          "first_name": formData.first_name,
          "last_name": formData.last_name,
          "address": {
              "line_1": formData.address_1,
              "line_2": formData.address_2,
              "city": formData.city,
              "region": formData.region,
              "postal": formData.postal
          }
        };
        const qoute = await axios.post('https://fed-challenge-api.sure.now.sh/api/v1/quotes', addressObj, config);

        const profileObj = {
            "address": {
                "line_1": formData.address_1,
                "line_2": formData.address_2,
                "city": formData.city,
                "region": formData.region,
                "postal": formData.postal
            },
            qoute,
            twitter: formData.twitter || '',
            facebook: formData.facebook || '',
            linkedin: formData.linkedin || '',
            youtube: formData.youtube || '',
            instagram: formData.instagram || ''
        };
        const res = await axios.post('/api/profile', profileObj, config);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });

        dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

        if(!edit){
            history.push('/dashboard');
        }
    }catch (err) {
        const errors = err.response?.data?.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status
            }
        });
    }
};
