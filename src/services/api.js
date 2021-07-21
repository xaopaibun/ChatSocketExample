import axios from 'axios';
import {  Url_Sever } from '../utils/until';

const instance = axios.create({
    baseURL: Url_Sever,
    timeout: 15000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
});


// const Token = localStorage.getItem('Token');

//login
export const loginAdmin =  (prams) => instance.post('/user/loginAdmin', prams);

//getproduct
export const getdata = () => instance.get('/getalldata');