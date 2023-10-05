import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import axios from "axios";
import './style.scss';

const DetalleItem = () => {

  const [favoritosBtn, setFavoritosBtn] = useState(false);

  const { data, shoppingCart, setShoppingCart, user, favoritos, setFavoritos, getFavoritos } = useContext(DataContext);

  const id = useParams();

  useEffect(() => {
    const isExist = favoritos.find(ele => ele.id === product.id);
    isExist && setFavoritosBtn(true);
    user.length > 0 && getFavoritos();
  }, [])

  const product = data.find((ele) => ele.id === Number(id.id));

  const toSCAdd = {
    id: product.id,
    img: product.img,
    titulo: product.titulo,
    descripcion: product.descripcion,
    precio: product.precio,
    stock: product.stock,
    qty: 1,
  };

  const addSC = (event) => {
    event.stopPropagation();
    const isExist = shoppingCart.find((ele) => ele.id === product.id);
    if (isExist) {
      const products = shoppingCart.map((ele) =>
        ele.id === product.id ? { ...ele, qty: ele.qty + 1 } : ele
      );
      setShoppingCart([...products]);
    } else {
      setShoppingCart([...shoppingCart, toSCAdd]);
    }
  };

  const setProductoFavorito = async () => {
    const idUser = user[0].id;
    const idProduct = product.id;
    await axios.post("http://localhost:3001/favoritos", { idUser, idProduct })
  }

  const deleteProductoFavorito = async () => {
    const idUser = user[0].id;
    const idProduct = product.id;
    try {
      await axios.delete("http://localhost:3001/usuario/" + idUser + "/publicacion/" + idProduct);
    } catch (error) {
      console.log(error);
    }
  }

  const handleFavoritos = () => {
    const isExist = favoritos.find(ele => ele.id === product.id);
    if (isExist) {
      setFavoritosBtn(false)
      deleteProductoFavorito();
      setFavoritos([]);
      getFavoritos()
    } else {
      setFavoritosBtn(true)
      setProductoFavorito();
      getFavoritos()
    }
  }

  return (
    <div className="center-container">
    <div className="card-item">
      <img src={product.img} alt="" className="card-img-top"/>
      <div className="card-body">
        <h3 className="card-title">{product.titulo}</h3>
        <p className="card-text">Vendido por {product.nombre}</p>
        <p className="card-text">{product.descripcion}</p>
        <p className="card-text">${product.precio}</p>
        <button className="btn btn-secondary itemDetail-button mb-4" onClick={addSC}>
          Agregar al carrito
        </button>
        <div className="itemDetail-like mt-2" onClick={user.length > 0 ? handleFavoritos : undefined}>
          {favoritosBtn ? (
            <>
              <p><i className="fa-sharp fa-solid fa-heart"></i></p>
              <p>Guardado en favoritos</p>
            </>
          ) : (
            <p><i className="fa-sharp fa-regular fa-heart"></i></p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
  
}

export default DetalleItem;
