import axiosInstance from "../core/instance";

export const fetchJobs = async () =>{
    try {
        const responce = await axiosInstance.get('/todo')
        return responce
    } catch (error) {
        throw(error);
    }
}