import { useMutation } from "react-query"
import { getDepartmentData, createDepartmentData, updateDepartmentData, deleteDepartmentData } from "./DepartmentApi";

export const useGetDepartments = () => {
    return useQuery('getDepartments', getDepartmentData);
};

export const useCreateDepartment = () => {
    return useMutation(createDepartmentData);
};


export const useUpdateDepartment = () => {
    return useMutation(({ id, data }) => updateDepartmentData(id, data));
};

export const useDeleteDepartment = () => {
    return useMutation(deleteDepartmentData);
};
