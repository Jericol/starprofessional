import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtetedRoutes() {
    
    const token = localStorage.getItem("token")

    if (token) {
        return <Outlet />
    } else {
        return <Navigate to="/login" />
    }
    
}

export default ProtetedRoutes;
