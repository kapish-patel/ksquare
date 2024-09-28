import React from 'react'
import Header from '../ui/Header/Header'
import { Outlet } from 'react-router-dom'

// include header and footer here 
function DashboardLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default DashboardLayout
