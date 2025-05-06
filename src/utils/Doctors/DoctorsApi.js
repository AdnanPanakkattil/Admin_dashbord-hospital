
import { ApiClient } from "../api/Api";

export const getDoctorsData = () => {
    return ApiClient.get('/DoctorsApi/'); 
};

export const createDoctorsData = (data) => {
    return ApiClient.post('/DoctorsApi/', data,{
        headers:{
            "Content-Type":"multipart/formData"
        }
    });
};

export const updateDoctorsData = (id, data) => {
    return ApiClient.put(`/DoctorsApi/${id}/`, data,{
        headers:{
            "Content-Type":"multipart/formData"
        }
    }

    );
};
export const deleteDoctorsData = (id) => {
    return ApiClient.delete(`/DoctorsApi/${id}/`);
};
