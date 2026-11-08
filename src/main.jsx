import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Service from './Pages/Service.jsx'
import Portfolio from './Pages/Portfolio.jsx'
import Team from './Pages/Team.jsx'
import Plans from './Pages/Plans.jsx'
import Blog from './Pages/Blog.jsx'
import Getin from './Pages/Getin.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/service',
        element:<Service/>
      },
      {
        path:'/portfolio',
        element:<Portfolio/>
      },
      {
        path:'/team',
        element:<Team/>
      },
      {
        path:'/plans',
        element:<Plans/>
      },
      {
        path:'/blog',
        element:<Blog/>
      },
      {
        path:'/getin',
        element:<Getin/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
