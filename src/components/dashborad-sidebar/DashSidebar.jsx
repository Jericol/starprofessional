import React, { useState } from "react";
import Control from "../../../public/img/control.png";
import { RiAccountCircleLine, RiTeamLine, RiFileTextLine, RiBook3Line, RiContactsLine, RiDraftLine, RiFileList3Line, RiFolderReceivedLine, 
    RiPagesLine} from "react-icons/ri";
import { Link } from "react-router-dom";

function DashSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div className="container mx-auto p-5 font-poppins">
      <div
        className={`bg-slate-200 border border-gray-400 fixed left-0  top-0 w-28 h-full flex flex-col justify-between rounded-tr-xl rounded-br-xl z-50 transition-all dark:bg-[#1f1d2b]
               text-white shadow-lg dark:shadow-white shadow-black duration-300 delay-75
               ${show ? "left-0" : "-left-full"} ${
          isOpen ? "w-72" : "w-[6rem]"
        }`}
      >
        <img
          src={Control}
          alt=""
          className={`absolute cursor-pointer -right-3 top-9 w-9 border-2 border-gray-300 rounded-full ${
            !open && "rotate-180"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        />
        <div>
          <ul className="pt-6">
            {/* foto de perfil */}
            <li className="dark:text-gray-400 text-sm flex items-center gap-x-4 cursor-pointer p-5 rounded-md">
                <Link className="p-4 flex justify-center rounded-xl">
                    <RiAccountCircleLine className={`text-2xl text-black `} />
                    <h2 className={`${!isOpen && 'hidden'} text-black origin-left duration-500 pl-11 font-medium text-xl`}>Nombre</h2>
                </Link>
            </li>
            {/* clientes  */}
            <li className="dark:text-gray-400 text-sm flex items-center gap-x-4 cursor-pointer p-5 rounded-md">
                <Link className="p-4 flex justify-center rounded-xl ">
                     <RiTeamLine className="text-black text-2xl "/>
                     <h2 className={`${!isOpen && 'hidden'} text-black origin-left duration-500 pl-11 font-medium text-xl`}>Clientes</h2>
                </Link>
            </li>
            {/* movimiento de clientes */}
            <li className="dark:text-gray-400 text-sm flex items-center gap-x-4 cursor-pointer p-5 roundedn-md">
                <Link className="p-4 flex justify-center rounded-xl">
                    <RiFileTextLine className="text-black text-2xl"/>
                    <h2 className={`${!isOpen && 'hidden'} text-black origin-left duration-500 pl-11 font-medium text-xl`}>Crear cliente</h2>
                </Link>
            </li>
            {/* cartera */}
            <li className="dark:text-gray-400 text-sm flex items-center gap-x-4 cursor-pointer p-5 rounded-md">
                <Link className="p-4 flex justify-center rounded-xl">
                    <RiBook3Line className="text-black text-2xl"/>
                    <h2 className={`${!isOpen && 'hidden'} text-black origin-left duration-500 pl-11 font-medium text-xl`}>Cartera</h2>
                </Link>
            </li>
            {/* movimiento */}
            <li className="dark:text-gray-400 text-sm flex items-center gap-x-4 cursor-pointer p-5 rounded-md">
                <Link className="p-4 flex justify-center rounded-xl">
                    <RiContactsLine className="text-black text-2xl"/>
                    <h2 className={`${!isOpen && 'hidden'} text-black origin-left duration-500 pl-11 font-medium text-xl`}>Movimiento</h2>
                </Link>
            </li>
            {/* pedidos */}
            <li className="dark:text-gray-400 text-sm flex items-center gap-x-4 cursor-pointer p-5 rounded-md">
                <Link className="p-4 flex justify-center rounded-xl">
                    <RiDraftLine className="text-black text-2xl"/>
                    <h2 className={`${!isOpen && 'hidden'} text-black origin-left duration-500 pl-11 font-medium text-xl`}>Pedidos</h2>
                </Link>
            </li>
            {/* facturas */}
            <li className="dark:text-gray-400 text-sm flex items-center gap-x-4 cursor-pointer p-5 rounded-md">
                <Link className="p-4 flex justify-center rounded-xl">
                    <RiFileList3Line className="text-black text-2xl"/>
                    <h2 className={`${!isOpen && 'hidden'} text-black origin-left duration-500 pl-11 font-medium text-xl`}>Facturas</h2>
                </Link>
            </li>
            {/* devoluciones */}
            <li className="dark:text-gary-400 text-sm flex items-center gap-x-4 cursor-pointer p-5 rounded-md">
                <Link className="p-4 flex justify-center rounded-xl">
                    <RiFolderReceivedLine className="text-black text-2xl"/>
                    <h2 className={`${!isOpen && 'hidden'} text-black origin-left duration-500 pl-11 font-medium text-xl`}>Devoluciones</h2>
                </Link>
            </li>
            {/* recibos de pago */}
            <li className="dark:text-gray-400 text-sm flex items-center gap-x-4 cursor-pointer p-5 rounded-md">
                <Link className="p-4 flex justify-center rounded-xl">
                    <RiPagesLine className="text-black text-2xl"/>
                    <h2 className={`${!isOpen && 'hidden'} text-black origin-left duration-500 pl-11 font-medium text-xl`}>Recibos de pago</h2>
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashSidebar;
