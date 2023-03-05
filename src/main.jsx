import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { QuioscoProvide } from './context/QuioscoProvider'
import router from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuioscoProvide>
      <RouterProvider router={router} />
    </QuioscoProvide>
  </React.StrictMode>,
)
