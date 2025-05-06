import { ApiClient } from "../api/Api"

export const getAppoinmentData = () => {
    return ApiClient.get('AppoinmentApi/')
}

export const creategetAppoinmentData = (data)=>{
    return ApiClient.post('AppoinmentApi/',data)
}