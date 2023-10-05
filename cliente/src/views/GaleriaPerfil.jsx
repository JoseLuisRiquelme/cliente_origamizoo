import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext';
import CardsProfile from '../components/CardsUsuario';
import { Link } from "react-router-dom";
import axios from 'axios';
import './style.scss';

const GaleriaPerfil = () => {

    const [productsUser, setProductsuser] = useState([])

    const { user } = useContext(DataContext)

    const getUserProducts = async () => {
        try {
            const id_user = user[0].id;
            const data = await fetch("http://localhost:3001/publicaciones/usuario/" + id_user);
            const res = await data.json();
            setProductsuser(res);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserProducts()
    }, [])

    return (
        <div className="main-container-pub"> 
            <div className='p-5 text-center'>
                <h1 className='mb-2'>Tus publicaciones</h1>
                <h5 className='mb-3'>Administra tus listados de productos aquí</h5>
                <Link to="/publicar-producto" className='btn btn-secondary'>Publicar producto</Link>
            </div>
            <div className='home-galeria'style={{ marginBottom: '45px' }}>
                {productsUser.map((ele) => {
                    return (
                        <CardsProfile key={ele.id} data={ele} />
                    )
                })}
            </div>
        </div>
    )
}

export default GaleriaPerfil;
