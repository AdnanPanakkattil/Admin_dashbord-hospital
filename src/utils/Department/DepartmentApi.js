
import { ApiClient } from "../api/Api";

export const getDepartmentData = () => {
    return ApiClient.get('/DepartmentApi/'); 
};

export const createDepartmentData = (data) => {
    return ApiClient.post('/DepartmentApi/', data);
};

export const updateDepartmentData = (id, data) => {
    return ApiClient.put(`/DepartmentApi/${id}/`, data);
};
export const deleteDepartmentData = (id) => {
    return ApiClient.delete(`/DepartmentApi/${id}/`);
};
