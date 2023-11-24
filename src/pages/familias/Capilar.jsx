import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RiStackLine } from "react-icons/ri";
import { TECollapse } from "tw-elements-react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./familias.css";

function Capilar() {
  const { Codigo } = useParams();

  const [activeElement, setActiveElement] = useState("");
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [productsPage, setProductsPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  // los multiplos que se van a recorrer en en la paginacion
  const lastIndex = currentPage * productsPage;
  const firsIndex = lastIndex - productsPage;
  const totalProduct = items.length;
  const [currentList, setCurrentList] = useState(1);
  // traer articulos de redux
  const productList = useSelector((state) => state.product);

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };

  useEffect(() => {
    axios
      .get("http://190.60.237.163/traegrupos/?codigo=A")
      .then((res) => setCategories(res.data.RESP));
  }, []);

  useEffect(() => {
    axios
      .get("http://190.60.237.163/articulos/?familia=A")
      .then((res) => setItems(res.data.RESP));
  }, []);

  const settings = [
    {
       dots: true,
       infinity: true,
       speed: 500,
       slidesToShow: 3,
       slidesToScroll: 1,
    },
  ];

  console.log(items);

  console.log(categories);

  return (
    <div className="h-[200rem] ">
      <h2 className="text-2xl font-bold text-center mb-8">Componente de Capilar</h2>
      {/* card */}
      <div className="grid grid-cols-5 gap-8">
            {
                items.slice(firsIndex, lastIndex).map((item) => (
                    <div className="col-span-1 mb-4">
                        <div className="bg-white rounded-lg shadow-md p-5">
                            <div className="flex justify-center">
                                <img src={item.Foto} alt="" className="w-36 h-36"/>
                            </div>
                            <div className="flex justify-center">
                                <h2 className="text-xl font-bold">{item.Descripcion}</h2>
                            </div>
                            <div className="flex justify-center">
                                <h2 className="text-xl font-bold">{item.Precio}</h2>
                            </div>
                        </div>
                    </div>
                ))  
            }
      </div>
    </div>
  );
}

export default Capilar;
