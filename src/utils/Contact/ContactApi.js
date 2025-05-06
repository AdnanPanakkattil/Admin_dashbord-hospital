import { ApiClient } from "../api/Api"



export const getContactData = () => {
    return ApiClient.get('ContactApi/')
}

export const creategetContactData = (data)=>{
    return ApiClient.post('ContactApi/',data)
}