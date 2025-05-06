import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Dashboard from './pages/Dashboard.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App.jsx'
import DoctorsPage from './pages/DoctorsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import AppoinmentPage from './pages/AppoinmentPage.jsx'
import DepartmentPage from './pages/DepartmentPage.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/Dashboard',
        element:<Dashboard/>
      },
      {
        path:'/Appoinment',
        element:<AppoinmentPage/>
      },
      {
        path:'/Doctors',
        element:<DoctorsPage/>
      },
      {
        path:'/Department',
        element:<DepartmentPage/>
      },
      {
        path:'/Contact',
        element:<ContactPage/>
      },
    ]
  }
])
const client = new QueryClient() 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={client}>
    <RouterProvider router={router}/>
    </QueryClientProvider>
  </StrictMode>,
)
