import React from 'react';
import { RiWhatsappLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function ContactButton() {
    return (
        <div className='flex'>
            <Link 
              to='https://wa.link/ha60z4' 
              className='fixed lg:top-[55rem] lg:left-[114rem] md:top-[57rem] md:left-[43.5rem] top-[49rem] left-[20rem] z-50 rounded-full '
              target='_blank'
            >
                <img
                    src="https://i.ibb.co/12RyfMB/whatsapp.png"
                    alt=""
                    className='md:w-[70px] w-[50px] rounded-full px-2 py-2 cursor-pointer hover:!scale-125 transition  '
                />
            </Link>
        </div>
    )
}

export default ContactButton;
