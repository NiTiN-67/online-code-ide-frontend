//Network Call(HTTP/HTTPS)
import axios from 'axios';
//HTTP Call (HTTP Methods)
//GET - Read
//POST - Write (Insert)
//PUT - Update
//Delete - Remove
//CRUD Operations
export const apiClient = {
    async get(URL){
        try{
            const response = await axios.get(URL);
            return response.data;
        }
        catch(err){
            throw err;
        }
    },
    async post(URL, data){
        try{
            const response = await axios.post(URL, data);
            return response;
        }
        catch(err){
            throw err;
        }
    },
}