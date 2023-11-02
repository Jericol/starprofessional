import React from 'react';
import { RiArrowUpCircleLine } from "react-icons/ri";

function BottomUp() {
    return (
        <div>
            <div className='fixed bottom-[4rem] w-[6.6rem] h-[6.6rem] z-[-1]'>
                <div className='w-0 h-0 bg-blue-500 rounded-[50%] cursor-pointer top-1/2 left-1/2 
                 transform translate-x-1/2 translate-y-1/2 -z-[1]'
                
                >
                    <RiArrowUpCircleLine 
                      className='absolute text-xl top-1/2 left-1/2 transform translate-x-1/2 translate-y-1/2 scale-0 text-white 
                      transition'
                    />
                </div>
            </div>
        </div>
    )
}

export default BottomUp;
