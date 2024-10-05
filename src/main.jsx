import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Page/Login.jsx'
import Read from './Page/Read.jsx'
import Add from './Page/Add.jsx'

const routes = createBrowserRouter([
  {
    path : "/login",
    element : <Login/>
  },
  {
    path : "/",
    element : <Read/>
  },
  {
    path : "/add",
    element : <Add/>
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
