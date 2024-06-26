import { Fork, job } from '@/interface';
import axiosInstance from '../core/instance';

export const fetchJobs = async (id?:string) => {
  if(!id){
    try {
      const response = await axiosInstance.get<Fork[]>('/products');
      return response ;
    } catch (error) {
      throw error;
    }
  }else{
    try {
      const response = await axiosInstance.get<Fork[]>(`/products`);
      return response;
    } catch (error) {
      throw error;
    }
  }
};

export const featchJobDetail = async (id: string) => {
  try {
    const response = await axiosInstance.get<job>(`/products/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};
