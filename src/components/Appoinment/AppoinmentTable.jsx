import React from 'react'
import { useQuery } from 'react-query'
import {  Table } from 'antd'
import { getAppoinmentData } from '../../utils/Appoinment/AppoinmentApi'

const AppoinmentTable = () => {
    const colums = [
        {
            title:"id",
            key:"id",
            dataIndex:"id"
        },
        
        {
            title:"First Name",
            key:"id",
            dataIndex:"First_name"
        },
        {
            title:"Last name ",
            key:"id",
            dataIndex:"Last_name"
        },
        {
            title:"Email ",
            key:"id",
            dataIndex:"Email"
        },
        {
            title:"Phone ",
            key:"id",
            dataIndex:"Phone"
        },
        {
            title:"Patient name ",
            key:"id",
            dataIndex:"Patient_name"
        },
        {
            title:"doctor name ",
            key:"id",
            dataIndex:"doctor_name"
        },
        {
            title:"department name ",
            key:"id",
            dataIndex:"department_name"
        },
        {
            title:"Date",
            key:"id",
            dataIndex:"Date"
        },
        {
            title:"Massage",
            key:"id",
            dataIndex:"Patient_name"
        },
    ]
    
    const {data,isLoading,refetch} = useQuery('getAppoinment',getAppoinmentData)
  return (
    <div>
        <Table columns={colums} dataSource={data?.data} />
    </div>
  )
}

export default AppoinmentTable