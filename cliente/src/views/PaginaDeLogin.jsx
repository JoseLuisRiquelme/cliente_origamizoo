import React, { useContext, useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import logo from "../images/logo.png";
import "./style.scss";
import { useForm } from "react-hook-form";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import Message from "../components/Mensaje";
import axios from "axios";

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { isAuthenticated, setIsAuthenticated, setUser } =
        useContext(DataContext);
    const navigate = useNavigate();

    const getUser = async () => {
        const token = localStorage.getItem("token");
            try {
        const { data } = await axios.get(
            "http://localhost:3001/user",
        {
            headers: { Authorization: "Bearer " + token },
        }
        );
        setUser(data);
        } catch (error) {
            console.log(error);
        }
    };

    const getUserLogin = async (data) => {
        try {
    const { email, password } = data;
    const response = await axios.post(
        "http://localhost:3001/login",
    { email, password }
    );
        setIsAuthenticated(true);
        localStorage.setItem("token", response.data);
        await getUser();
        setTimeout(() => {
            navigate("/");
        }, 1500);
        } catch (error) {
            console.log("Contraseña o usuario equivocados");
        }
    };

    const onSubmit = (data) => {
        getUserLogin(data);
    };

return (
    <div className="main-login">
        <Container>
    <div className="text-center m-5">
        <h3>Iniciar Sesión</h3>
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
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control
                    type="email"
                    placeholder="Ingrese email"
                    {...register("email")}
                    />
                </Form.Group>
                {errors.password && <p>This field is required</p>}
                <Form.Group className="mb-5">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder="Ingrese contraseña"
                    {...register("password", { required: true })}
                    />
                </Form.Group>
                    <Button className='btn btn-secondary' type="submit">Iniciar Sesión</Button>
                </Form>
                {isAuthenticated && (
                <Message message="Usuario verificado" />
                )}
            </div>
            </Col>
        </Row>
        </div>
        </Container>
    </div>
    );
}
