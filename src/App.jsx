import { Link, Outlet } from "react-router"
import { Button, Layout, Menu, theme } from 'antd';
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { Content, Header } from "antd/es/layout/layout";
import {

  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CalendarOutlined ,
  PhoneOutlined,
  MedicineBoxOutlined,
  AppstoreAddOutlined,
} from '@ant-design/icons';
function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="w-full h-screen">
    <Layout className="m-0 p-0 w-full h-full">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical h-[50px]" />
        <Menu
          theme="dark"
          mode="inline"
        >
          <Menu.Item icon={<DashboardOutlined/>}key={'1'}>
            <Link to={'/Dashboard'} className="text-red-500">Dashboard</Link>
          </Menu.Item>
          <Menu.Item icon={<CalendarOutlined/>} key={'2'}>
            <Link to={'/Appoinment'} className="text-red-500">AppoinmentPage</Link>
          </Menu.Item>
          <Menu.Item icon={<MedicineBoxOutlined/>} key={'3'}>
            <Link to={'/Doctors'} className="text-red-500">DoctorsPage</Link>
          </Menu.Item>
          <Menu.Item icon={<AppstoreAddOutlined/>} key={'4'}>
            <Link to={'/Department'} className="text-red-500">DepartmentPage</Link>
          </Menu.Item>
          <Menu.Item icon={<PhoneOutlined/>} key={'5'}>
            <Link to={'/Contact'} className="text-red-500">ContactPage</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header 
        className="bg-white"
          style={{
            padding: 0,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
        className="overflow-y-scroll"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  </div>
  )
}
export default App
