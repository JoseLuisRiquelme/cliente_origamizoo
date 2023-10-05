import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import Pikachu from "../images/Pikachu.png";
import Evee from "../images/Evee.png";
import Squirtle from "../images/Squirtle.png";
import Tororojo from "../images/Tororojo.png";

export function PaginaDePerfil() {
  const { user } = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <div className="gradient-custom-2" style={{ backgroundColor: "#cdd3d5ff" }}>
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-lg-24 col-xl-13">
            <div className="card">
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#F08621", height: "200px" }}
              >
                <div
                  className="ms-4 mt-5 d-flex flex-column"
                  style={{ width: "150px" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1558244402-286dd748c593?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
                    alt="Foto Perfil"
                    className="mt-4 mb-2 img-thumbnail"
                    style={{ width: "150px", zIndex: "1" }}
                  />
                  
                </div>
                <div className="ms-3" style={{ marginTop: "130px" }}>
                  <h5>
                    {user[0].nombre.charAt(0).toUpperCase() + user[0].nombre.slice(1)}
                  </h5>
                  <p>
                    {user[0].direccion.charAt(0).toUpperCase() + user[0].direccion.slice(1)}
                  </p>
                </div>
              </div>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: "#B1A698" }}
              >
                <div className="d-flex justify-content-end text-center py-1">
                  <p
                    onClick={() => navigate("/galeria-perfil")}
                    className="btn btn-secondary me-5"
                  >
                    Mis Publicaciones
                  </p>
                  <div>
                    <p className="mb-1 h5">25</p>
                    <p className="small text-muted mb-0">
                      Compras
                    </p>
                  </div>
                  <div className="px-3">
                    <p className="mb-1 h5">5 años</p>
                    <p className="small text-muted mb-0">
                      Suscrito
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 h5">Gratuita</p>
                    <p className="small text-muted mb-0">
                      Categoría
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-body text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">Información Usuario</p>
                  <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                    <p className="font-italic mb-1">
                      Email: {user[0].email}
                    </p>
                    <p className="font-italic mb-0">
                      Telefono: {user[0].telefono}
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <p className="lead fw-normal mb-0">
                    Ultimas Compras
                  </p>
                  <p className="mb-0">
                    <a href="#!" className="text-muted">
                      Ver mas
                    </a>
                  </p>
                </div>
                <div className="row">
                  <div className="col mb-2">
                    <img src={Pikachu} className="w-50 rounded-3" alt="Pikachu" />
                    <p className="card-text">Origami Pikachu - $15.900</p>
                  </div>
                  <div className="col mb-2">
                    <img src={Evee} className="w-50 rounded-3" alt="Evee" />
                    <div className="card-body">
                        <p className="card-text">Origami Eeve - $13.200</p>
                        </div>     
                  </div>
                </div>
                <div className="row g-2">
                  <div className="col mb-2">
                    <img src={Squirtle} className="w-50 rounded-3" alt="Squirtle" />
                    <div className="card-body">
                        <p className="card-text">Origami Squirtle - $15.900</p>
                        </div>     
                  </div>
                  <div className="col mb-2">
                    <img src={Tororojo} className="w-50 rounded-3" alt="Tororojo" />
                    <div className="card-body">
                        <p className="card-text">Toro Rojo $13.000</p>
                        </div>      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}