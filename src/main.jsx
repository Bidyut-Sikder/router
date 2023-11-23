import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';

const router=createBrowserRouter([
    {
        path: '/router/',
        element:<App />,
        children:[
            {
                path: '/router/',
                element:< Home/>
            },
            {
                path: '/router/contact',
                element:< Contact/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(

<RouterProvider router={router} />



)
 