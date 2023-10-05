import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'
import CardsLiked from '../components/CardsLiked';
import './style.scss';


const Like = () => {

  const { favoritos, getFavoritos } = useContext(DataContext);

  

  useEffect(() => {
    getFavoritos()
  }, [favoritos])


  return (
    <div className="like-container">
      <h1 className="like-title">Tus favoritos</h1>
      <div className="cards-container">
        {favoritos.map((ele) => (
          <CardsLiked key={ele.id} data={ele} />
        ))}
      </div>
    </div>
  );
};

export default Like;