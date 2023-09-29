import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './Router.tsx'
import MyNavBar from './utils/MyNavBar.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <MyNavBar/>
      <Router/>
  </React.StrictMode>,
)
