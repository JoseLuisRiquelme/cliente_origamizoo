import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CardWidget from "../components/CardWidget";
import { DataContext } from "../context/DataContext";
import logo from "../images/logo.png";
import './style.scss';


const NavBar = () => {
  const { totalItems, isAuthenticated, setIsAuthenticated } = useContext(DataContext);

  const logOut = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="bg-background">
      <div
        className="d-flex justify-content-between align-items-center mx-auto py-1 flex-wrap"
        style={{ width: "100%", paddingLeft: "20px", paddingRight: "20px" }}
      >
        <div style={{ flex: 1, marginLeft: '20px', marginTop: '-10px', marginBottom: '5px' }}>
          <NavLink to="/">
            <img alt="logo" src={logo} width="100px" style={{ verticalAlign: 'middle' }} />
          </NavLink>
        </div>

        <div style={{ flex: 1, textAlign: 'center' }}>
          <span className="ms-4 mb-0" style={{ color: '#332f30', fontSize: '2.5rem', fontWeight: 'bold', verticalAlign: 'middle' }}>
            <NavLink 
              to="/" activeClassName="active" style={{ textDecoration: 'none', color: 'inherit' }}>
              Origamizoo
            </NavLink>
          </span>
        </div>

        <div style={{ flex: 1, textAlign: 'right', marginRight: '20px' }}>
          <ul className="navbar-list d-flex align-items-center justify-content-end" style={{ listStyle: 'none', margin: 0 }}>
            <NavLink to="/" className="li" style={{ color: '#332f30', marginLeft: '10px', marginRight: '10px' }}>
              Inicio
            </NavLink>
            {isAuthenticated ? (
              <NavLink to="/perfil-usuario" className="li" style={{ color: '#332f30', marginLeft: '10px', marginRight: '10px' }}>
                Perfil
              </NavLink>
            ) : (
              <NavLink to="/login" className="li" style={{ color: '#332f30', marginLeft: '5px', marginRight: '5px' }}>
                Iniciar Sesion
              </NavLink>
            )}
            {isAuthenticated && (
              <NavLink to="/liked" className="li" style={{ color: '#332f30', marginLeft: '5px', marginRight: '5px' }}>
                Favoritos
              </NavLink>
            )}
            {isAuthenticated && (
              <NavLink to="/publicar-producto" className="li" style={{ color: '#332f30', marginLeft: '5px', marginRight: '5px' }}>
                Publicar Producto
              </NavLink>
            )}
            {isAuthenticated ? (
              <NavLink to="/" className="li" id="li-logut" onClick={logOut} style={{ color: '#332f30', marginLeft: '5px', marginRight: '5px' }}>
                Cerrar Sesion
              </NavLink>
            ) : (
              <NavLink to="/registrar" className="li" style={{ color: '#332f30', marginLeft: '5px', marginRight: '5px' }}>
                Crea una cuenta
              </NavLink>
            )}
            <NavLink to="/carrito-compras" className="li cart" style={{ color: '#332f30', marginLeft: '5px', marginRight: '5px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <CardWidget />
                {totalItems}
              </div>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;