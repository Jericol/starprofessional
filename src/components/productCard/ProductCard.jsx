import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {

    const navigate = useNavigate();
    const productList = useSelector(state => state.product);


  return (
    <div className='max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-5'>
        <img 
           src={product.Foto} 
           alt={product.Descripcion} 
           className='w-full h-56 object-cover object-center'
           onClick={() => navigate(`/product/${product.Codigo}}`)}
        />
        <div className='py-4 px-6'>
           <h2 className='text-lg font-semibold text-gray-600'>{product.Descripcion}</h2>
           <p>${product.Precio}</p>
           <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Comprar
           </button>
        </div>
    </div>
  )
}

export default ProductCard;
