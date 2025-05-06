import { Table } from 'antd'
import React from 'react'
import { useQuery } from 'react-query'
import { getContactData } from '../../utils/Contact/ContactApi'

const Contactlist = () => {
const colums = [
  {
    title:"id",
    key:"id",
    dataIndex:"id"
},
  {
    title:"name",
    key:"id",
    dataIndex:"name"
},
  {
    title:"Email",
    key:"id",
    dataIndex:"Email"
},
  {
    title:"subject",
    key:"id",
    dataIndex:"subject"
},
]
const {data,isLoading,refetch} = useQuery('getContact',getContactData)

  return (
    <div>
      <Table columns={colums}  dataSource={data?.data}/>
    </div>
  )
}

export default Contactlist