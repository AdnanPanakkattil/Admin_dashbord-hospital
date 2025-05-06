import { useMutation } from "react-query"
import { creategetAppoinmentData } from "./AppoinmentApi"


export const useCreateAppoinment = ()=>{
    return useMutation((data)=>creategetAppoinmentData(data))
}