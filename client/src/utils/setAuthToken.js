import axios from 'axios';

// Adding a global header for authentication
const setAuthToken = token =>{
    if(token){
        axios.defaults.headers.common['x-auth-token']=token;
    }else{
        delete axios.defaults.headers.common['x-auth-token'];
    }
};

export default setAuthToken;