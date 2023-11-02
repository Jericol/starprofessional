import React from 'react';
import { RiArrowDropDownFill,  RiArrowDropUpFill } from "react-icons/ri";

function ButtonArrow({sesion, setSesion}) {
    return (
        <div>
            {
                sesion ?
                    <RiArrowDropDownFill className='text-xl cursor-pointer' />
                    :
                    <RiArrowDropUpFill className='text-xl cursor-pointer' />
            }
        </div>
    )
}

export default ButtonArrow;
