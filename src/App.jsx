import { Link, NavLink, Outlet } from "react-router"
import { Button, Layout, Menu, theme } from 'antd';
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { Content, Header } from "antd/es/layout/layout";
import {
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CalendarOutlined,
  PhoneOutlined,
  MedicineBoxOutlined,
  AppstoreAddOutlined,
} from '@ant-design/icons';

function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="w-full h-screen">
      <Layout className="m-0 p-0 w-full h-full">
        <Sider trigger={null}  collapsible  collapsed={collapsed}  width={220} 
          className="bg-blue-900" 
        >
          <div className="text-white py-4 text-center font-bold text-xl">
            {collapsed ? "" : "HealthCare"}
          </div>
          <Menu theme="dark" mode="inline" className="bg-inherit">
            <Menu.Item icon={<DashboardOutlined />} key="1">
              <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : "text-white"}>
                Dashboard
              </NavLink>
            </Menu.Item>
            <Menu.Item icon={<CalendarOutlined />} key="2">
              <NavLink to="/Appoinment" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : "text-white"}>
                Appointment
              </NavLink>
            </Menu.Item>
            <Menu.Item icon={<MedicineBoxOutlined />} key="3">
              <NavLink to="/Doctors" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : "text-white"}>
                Doctors
              </NavLink>
            </Menu.Item>
            <Menu.Item icon={<AppstoreAddOutlined />} key="4">
              <NavLink to="/Department" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : "text-white"}>
                Department
              </NavLink>
            </Menu.Item>
            <Menu.Item icon={<PhoneOutlined />} key="5">
              <NavLink to="/Contact" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : "text-white"}>
                Contact
              </NavLink>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Header className="bg-white" style={{ padding: 0, }} >
            <Button type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{ fontSize: '16px', width: 64, height: 64, }} />
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