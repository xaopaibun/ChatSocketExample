import axios from 'axios';
import { GetToken, GetTokenVerifyOTP, Url_Sever, Url_SeverLocal } from '../utils/until';

const instance = axios.create({
  baseURL: Url_Sever,
  timeout: 15000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});

const instanceLocal = axios.create({
  baseURL: Url_SeverLocal,
  timeout: 15000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});


const instanceMiddleware = axios.create({
  baseURL: Url_SeverLocal,
  timeout: 15000,
  headers: {
    Authorization: `Bearer ${GetToken()}`,
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});


// const Token = localStorage.getItem('Token');

//login
export const loginAdmin = (prams) => instance.post('/user/loginAdmin', prams);

//getproduct
export const getdata = () => instance.get('/getalldata');

export const findUser = (params) => instanceLocal.post('/findUser', params);

export const VerifyOTP_API = (params) => instanceLocal.put('/checkOTP', params);


export const singup = (prams) => instanceLocal.post('/signup', prams);
export const loginUser = (prams) => instanceLocal.post('/login', prams);

export const updateUser_API = (params) => instanceMiddleware.put('/updateuser', params);
