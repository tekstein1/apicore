import axios from "axios"; 

const api = axios.create({ 
    baseURL: 'https://iodno295ed.execute-api.us-west-2.amazonaws.com' 
});
    
export default api;