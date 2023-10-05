import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../views/style.scss'

const CardsProfile = ({ data, getUserProducts }) => {

  const navigate = useNavigate();

  const handleClickNavigate = () => {
    navigate(`/detalle-item/${data.id}`);
  }

  const handleEdit = (event) => {
    event.stopPropagation();
    navigate(`/editar-item/${data.id}`);
  }

  const handleDelete = (event) => {
    event.stopPropagation();
    const deleteItem = async () => {
      const itemId = data.id;
      try {
        await axios.delete(`http://localhost:3001/publicaciones/${itemId}`);
        getUserProducts(); // Refresca la lista de productos después de eliminar
      } catch (error) {
        console.log(error);
      }
    };
    deleteItem();
  };
  
  return (
    <div className='cardsHome' onClick={handleClickNavigate}>
      <img src={data.img} alt="" />
      <div>
        <h3>{data.titulo}</h3>
        <p>{data.descripcion}</p>
      </div>
      <div>
        <p>${data.precio}</p>
      </div>
      <div className='cardsHome-button-div'>
        <button className='btn btn-secondary mb-2' onClick={handleEdit}>Editar</button>
        <button className='btn btn-danger mb-2' onClick={handleDelete}>Eliminar</button>
      </div>
    </div>
  )
}

export default CardsProfile;
