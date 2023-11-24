import React from 'react'
import DashSidebar from '../../components/dashborad-sidebar/DashSidebar';
import { RiWallet2Line, RiBookLine, RiArticleLine } from "react-icons/ri";

function Dashboard() {
    return (
        <div className='md:flex   min-h-screen'>
            <div className='mb-2 z-50'>
              <DashSidebar />
            </div>
            <div className='flex-1 '>
                {/* para pc / tablet */}
                <main className='md:flex md:flex-col hidden'>
                    {/* 3 card de gastos */}
                   
                </main>
            </div>
        </div>
    )
}

export default Dashboard
