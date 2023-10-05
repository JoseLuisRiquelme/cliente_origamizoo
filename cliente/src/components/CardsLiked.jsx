import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from "../context/DataContext"; 
import '../views/style.scss';
import axios from 'axios';

const CardsLiked = ({ data }) => {
    const { user, favoritos, getFavoritos } = useContext(DataContext);
    const [favoritosBtn, setFavoritosBtn] = useState(false);

useEffect(() => {
    if (user.length > 0) {
        getFavoritos();
    }
}, [user]);
    
useEffect(() => {
    const isExist = favoritos.find(ele => ele.id === data.id);
    isExist && setFavoritosBtn(true);
}, [favoritos]);

const setProductoFavorito = async () => {
    const idUser = user[0].id;
    const idProduct = data.id;
    await axios.post("http://localhost:3001/favoritos", { idUser, idProduct });
    getFavoritos();
}

const deleteProductoFavorito = async () => {
    const idUser = user[0].id;
    const idProduct = data.id;
    try {
        await axios.delete("http://localhost:3001/usuario/" + idUser + "/publicacion/" + idProduct);
    } catch (error) {
        console.log(error);
    }
    getFavoritos();
}

const handleFavoritos = () => {
    const isExist = favoritos.find(ele => ele.id === data.id);
    if (isExist) {
        setFavoritosBtn(false);
        deleteProductoFavorito();
    } else {
        setFavoritosBtn(true);
        setProductoFavorito();
    }
}

return (
    <div className='cardSC'>
        
        <div className='cardSC-left'>
            <img className='cardSCImg' src={data.img} alt="" />
            <div>
                <h5>{data.titulo}</h5>
                <p>${data.precio}</p>
                <div className="itemDetail-like-favorite" onClick={user.length > 0 ? handleFavoritos : undefined}>
                    {favoritosBtn ? <>
                    <p><i className="fa-sharp fa-solid fa-heart"></i></p>
                    </> : <p><i className="fa-sharp fa-regular fa-heart"></i></p>}
                </div>
            </div>
        </div>
    </div>
)
}

export default CardsLiked;
