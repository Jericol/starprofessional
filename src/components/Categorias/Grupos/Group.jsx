import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterProductCategoriesThunk } from "../../../store/slice/product.slice";
import {
  RiFullscreenExitLine,
  RiApps2Fill,
  RiCloseCircleFill,
  RiApps2Line,
  RiLayoutGridFill,
} from "react-icons/ri";
import Categories from "../Category";
import { Link, useNavigate } from "react-router-dom";
import { TECollapse } from "tw-elements-react";
import "./group.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Group({
  itemPage,
  setItemPage,
  nextPage,
  setNextPage,
  showMenu,
  setShowMenu,
  logo,
  setLogo,
}) {
  const dispatch = useDispatch();
  // estado para categorias
  const [categories, setCategories] = useState([]);


  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    axios
      .get("http://190.60.237.163/traegrupos")
      .then((res) => setCategories(res.data.RESP));
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center pt-6 mb-[5rem]">
        <h2 className="text-2xl uppercase font-bold tracking-[1rem] dark:text-white">
          Categorias
        </h2>
      </div>
      <Slider {...settings} className="group-box">
        <div>
          <Link to="/Capilar">
            <img
              src="https://i.ibb.co/5G2vWRB/CATEGORIAS-PRINCIPALES-CAPILAR.jpg"
              alt="capilar"
            />
          </Link>
        </div>
        <div>
          <Link to="/Pestañas" target='_blank'>
            <img
              src="https://i.ibb.co/BfR8kHF/CATEGORIAS-PRINCIPALES-MAQUILLAJE-Y-PESTA-AS.jpg"
              alt="pestañas"
            />
          </Link>
        </div>
        <div>
          <Link to="/CuidadoFacial" target='_blank'>
            <img
              src="https://i.ibb.co/Xj8qb4C/BANNER-CATEGORIAS-PRINCIPALES-FACIAL.jpg"
              alt="facial"
            />
          </Link>
        </div>
        <div>
          <Link to="/Uñas" target='_blank'>
            <img
              src="https://i.ibb.co/fYPzg2p/CATEGORIAS-PRINCIPALES-U-AS.jpg"
              alt="uñas"
            />
          </Link>
        </div>
        <div>
          <Link to="/Barberia" target='_blank'>
            <img
              src="https://i.ibb.co/XDC6ghG/CATEGORIAS-PRINCIPALES-BARBERIA.jpg"
              alt="barberia"
            />
          </Link>
        </div>
        <div>
          <Link to="/CuidadoCorporal" target='_blank'>
            <img
              src="https://i.ibb.co/9yrRmCV/BANNER-CATEGORIAS-PRINCIPALES-CORPORAL.jpg"
              alt="corporal"
            />
          </Link>
        </div>
        <div>
          <Link to="/Barberia" target='_blank'>
            <img
              src="https://i.ibb.co/XDC6ghG/CATEGORIAS-PRINCIPALES-BARBERIA.jpg"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/Uñas" target='_blank'>
            <img
              src="https://i.ibb.co/fYPzg2p/CATEGORIAS-PRINCIPALES-U-AS.jpg"
              alt=""
            />
          </Link>
        </div>
      </Slider>
    </div>
  );
}

export default Group;
