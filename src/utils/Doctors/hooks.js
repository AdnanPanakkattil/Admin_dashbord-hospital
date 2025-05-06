import { useMutation } from "react-query"
import { createDoctorsData, deleteDoctorsData, getDoctorsData, updateDoctorsData } from "./DoctorsApi";


export const useGetDoctors = () => {
    return useQuery('getDoctors', getDoctorsData);
};

export const useCreateDoctors = () => {
    return useMutation(createDoctorsData);
};


export const useUpdateDoctors = () => {
    return useMutation(({ id, data }) => updateDoctorsData(id, data));
};

export const useDeleteDoctors = () => {
    return useMutation(deleteDoctorsData);
};
