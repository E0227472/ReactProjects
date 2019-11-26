import axios from 'axios';
import {toast} from 'react-toastify';

// intercepts the response before it reaches the actual method call 
// if an error is received, update the error message to be displayed 
axios.interceptors.response.use(null, error => {
    // behind the scenes, this part is executed before the return of resolve or reject 

    // obj not found or link missing error - both which ar expected and known errors
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500
    
    // could be server error or anything else unknown 
    if(!expectedError) {
        toast.error('An unexpected error has occured');
    }

    return Promise.reject(error);
});

export  const defaultUrl = 'https://api.github.com';
export const repoUrl = (username) => `https://api.github.com/users/${username}/repos`


// a service with the 4 http request loosely coupled to enable ease of change of library in the future 
export default {
get: axios.get, 
post: axios.post,
put: axios.put,
delete: axios.delete,
repoUrl: repoUrl
}