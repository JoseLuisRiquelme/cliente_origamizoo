import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import logo from "../images/logo.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Message from "../components/Mensaje";
import './style.scss';

export default function LoginPage() {
  const [addUser, setAddUser] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const postRegisterUser = async (data) => {
    const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
    const { nombre, email, contrasena, direccion, ciudad, telefono } = data;
    try {
      await axios.post("http://localhost:3001/register", {
        nombre,
        email,
        contrasena,
        direccion,
        ciudad,
        telefono,
        fecha_registro: formattedDate,
      });
      setAddUser(true);
      setTimeout(() => {
        navigate("/");
      }, 2500);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (data) => {
    postRegisterUser(data);
  };

  return (
    <div className="main-register">
      <Container>
        <div className="text-center m-5">
          <h3>Crear Perfil Nuevo</h3>
        </div>
        <div className="col-12 m-5">
          <Row>
            <Col>
              <img src={logo} className="img-logo p-5" alt="logo" />
            </Col>
            <Col className="d-flex align-items-center">
              <div className="col-10 mt-5">
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-4">
                    <Form.Label>Nombre y Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" {...register("nombre")} />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" {...register("email")} />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control type="text" placeholder="Direccion" {...register("direccion")} />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control type="text" placeholder="Ciudad" {...register("ciudad")} />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="number" placeholder="Telefono" {...register("telefono")} />
                  </Form.Group>
                  {errors.password && <p>This field is required</p>}
                  <Form.Group className="mb-4">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" {...register("contrasena", { required: true })} />
                  </Form.Group>
                  <Form.Group className="mb-5">
                    <Form.Label>Confirmar Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Confirmar Contraseña" {...register("confirmar-contrasena", { required: true })} />
                  </Form.Group>
                  <button type="submit" className='btn btn-secondary'>Registrarse</button>
                </Form>
                {addUser && <Message message="Usuario agregado correctamente" />}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
