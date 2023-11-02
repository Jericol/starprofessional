import React from 'react'
import AppNavbar from '../components/AppNavbar/AppNavbar';

function LayoutRoot() {
    return (
        <div className='flex items-center justify-center font-bold'>
            <h2 className='text-2xl'>Estas en layout Root</h2>
            <AppNavbar />
        </div>
    )
}

export default LayoutRoot;
