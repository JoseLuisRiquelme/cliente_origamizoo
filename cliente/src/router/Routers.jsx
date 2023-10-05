import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import DetalleItem from '../views/DetalleItem'
import Error from '../views/Error'
import GaleriaPerfil from '../views/GaleriaPerfil'
import PublicarProducto from '../views/PublicarProducto.jsx'
import PaginaDeLogin from'../views/PaginaDeLogin'
import { PaginaDePerfil } from "../views/PaginaDePerfil";
import { DataContext } from '../context/DataContext'
import Like from '../views/Like'
import EditarItem from '../views/EditarItem'
import CarritoCompras from '../views/CarritoCompras'
import PaginaDeRegistro from '../views/PaginaDeRegistro'

const Routers = () => {

  const {isAuthenticated} = useContext(DataContext);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detalle-item/:id' element={<DetalleItem />} />
      <Route path='/carrito-compras' element={<CarritoCompras />} />
      <Route path="/registrar" element={<PaginaDeRegistro />} />
      <Route path="/login" element={<PaginaDeLogin />} />
      <Route path="/perfil-usuario" element={isAuthenticated ? <PaginaDePerfil /> : <Navigate to="/login" />} />
      <Route path='/publicar-producto' element={isAuthenticated ? <PublicarProducto /> : <Navigate to="/login" />} />
      <Route path='/liked' element={isAuthenticated ? <Like /> : <Navigate to="/login" />} />
      <Route path='/galeria-perfil' element={isAuthenticated ? <GaleriaPerfil /> : <Navigate to="/login" />} />
      <Route path='/editar-item/:id' element={isAuthenticated ? <EditarItem /> : <Navigate to="/login" />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
};
export default Routers;
