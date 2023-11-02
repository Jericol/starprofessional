import React from 'react';
import { RiArrowDropDownFill,  RiArrowDropUpFill } from "react-icons/ri";

function ButtonArrowArticule({itemsList}) {
    return (
        <div>
             {
                itemsList ?
                    <RiArrowDropDownFill className='text-xl cursor-pointer' />
                    :
                    <RiArrowDropUpFill className='text-xl cursor-pointer' />
            }
        </div>
    )
}

export default ButtonArrowArticule;
