import axios from "axios";
import React, { useEffect, useState } from "react";

function Barberia() {
  const [items, setItems] = useState([]);

  const [productsPage, setProductsPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * productsPage;
  const firsIndex = lastIndex - productsPage;

  useEffect(() => {
    axios
      .get("http://190.60.237.163/articulos/?familia=B&size=2000")
      .then((res) => setItems(res.data.RESP));
  }, []);

  console.log(items)

  return (
    <div className="h-[200rem] ">
      <h2 className="text-2xl font-bold text-center mb-8">
        Componente de Barberia
      </h2>
      {/* card */}
      <div className="grid grid-cols-5 gap-8">
        {items.slice(firsIndex, lastIndex).map((item) => (
          <div className="col-span-1 mb-4">
            <div className="bg-white rounded-lg shadow-md p-5">
              <div className="flex justify-center">
                <img src={item.Foto} alt="" className="w-36 h-36" />
              </div>
              <div className="flex justify-center">
                <h2 className="text-xl font-bold">{item.Descripcion}</h2>
              </div>
              <div className="flex justify-center">
                <h2 className="text-xl font-bold">{item.Precio}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Barberia;
