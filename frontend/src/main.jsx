import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import DashboardPage from './pages/DashboardPage.jsx';
import DevicesPage from './pages/DevicesPage,.jsx';
import SchedulesPage from './pages/SchedulesPage.jsx'
import './App.css'
import NavigationBar from './components/NavigationBar.jsx';
import MainPage from './pages/MainPage.jsx';
import CreatePage from './pages/CreatePage.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainPage/>
  },
  {
    path:'/dashboard',
    element: <DashboardPage/>
  },
  {
    path:'/devices',
    element: <DevicesPage/>,
  },
  {
    path:'/schedules',
    element: <SchedulesPage/>
  },
  {
    path:'/devices/create',
    element: <CreatePage/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-gray-300 min-h-screen'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
