import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import '../views/style.scss'

const CardsHome = ({ data }) => {
  const navigate = useNavigate();
  const { shoppingCart, setShoppingCart } = useContext(DataContext);

  const handleClickNavigate = () => {
    navigate(`/detalle-item/${data.id}`);
  };

  const toSCAdd = {
    id: data.id,
    img: data.img,
    titulo: data.titulo,
    descripcion: data.descripcion,
    precio: data.precio,
    stock: data.stock,
    qty: 1,
  };

  const addSC = (event) => {
    event.stopPropagation();
    const isExist = shoppingCart.find((ele) => ele.id === data.id);
    if (isExist) {
      const products = shoppingCart.map((ele) =>
        ele.id === data.id ? { ...ele, qty: ele.qty + 1 } : ele
      );
      setShoppingCart([...products]);
    } else {
      setShoppingCart([...shoppingCart, toSCAdd]);
    }
  };

  return (
    <div className="cardsHome" onClick={handleClickNavigate} style={{ cursor: 'pointer' }}>
      <img src={data.img} alt="" className="card-img-top"/>
      <div className="card-body">
        <h3 className="card-titulo">{data.titulo}</h3>
        <p className="card-text">{data.descripcion}</p>
        <p className="card-text">${data.precio}</p>
        <button className="btn btn-secondary mb-4" onClick={addSC}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default CardsHome;

