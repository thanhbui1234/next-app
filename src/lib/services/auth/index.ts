import { signUp } from '@/interface/auth';
import axiosInstance from '@/lib/core/instance';
import { AxiosResponse } from 'axios';

export const registerAccount  = async (body: signUp) => {
  try {
   const respone : AxiosResponse = await axiosInstance.post('auth/register', body);
   return respone;
  } catch (error) {
    throw(error);
  }
};
export const loginUser = async (body:signUp) =>{
  try {
      const respone : AxiosResponse = await axiosInstance.post('auth/login',body);
      return respone;
  } catch (error) {
    throw(error);
  }
}