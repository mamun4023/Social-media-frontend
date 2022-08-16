import axios from 'axios';
import {URL} from '../../utils/config';

export const Login = (data)=>{
    return axios.post(`${URL}/login`, data);
}