import React from "react";
import logo from "../images/logo.png";
import './style.scss';

export const Footer = () => {
  return (
    <div className="bg-background">
      <div className="d-flex justify-content-center align-items-center mx-auto py-2 flex-wrap">
        <div className="d-flex align-items-center justify-content-center">
          <a href="/"
              className="d-flex align-items-center p-0"
              style={{ color: '#332f30', textDecoration: 'none' }}>
            <img alt="logo" src={logo} width="85px" style={{ verticalAlign: 'middle', marginTop: '-10px' }} />
            <span className="ms-4 h5 mb-0 font-weight-bold">
              OrigamiZoo
            </span>
          </a>
          <small className="ms-2" style={{ color: '#332f30', marginLeft: '20px' }}>
            &copy; OrigamiZoo, 2023. Todos los derechos reservados
          </small>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-flat p-2" style={{ marginLeft: '20px' }}>
            <i className="bi bi-facebook"></i>
          </button>
          <button className="btn btn-flat mx-3 p-2">
            <i className="bi bi-twitter"></i>
          </button>
          <button className="btn btn-flat p-2">
            <i className="bi bi-instagram"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
