import { signUp } from '@/interface/auth';
import axiosInstance from '@/lib/core/instance';

export const registerAccount = async (body: signUp) => {
  try {
    await axiosInstance.post('auth/register', body);
  } catch (error) {
    throw(error);
  }
};
