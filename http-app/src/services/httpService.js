import axios from "axios";
import LogService from "./logService";
import {toast} from 'react-toastify'; // display toast messages instead of alert messages 


// this part is always called before the crud operations are called throughout the app.
// returns errors if there are any. 
axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if (!expectedError) {
       LogService.log(error);
        toast.error('An unexpected error has occured');
    }
    // return only rejected promise with the error code. 
    return Promise.reject(error);
});

// set the crud methods here. In the event if wish to use other libraries, can change easily. 
// purpose is to not fix the libraries to axios. 
export default {
get: axios.get, // attribute
post: axios.post,
put: axios.put,
delete: axios.delete
}