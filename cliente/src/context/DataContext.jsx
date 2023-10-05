import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [data, setData] = useState([]);
    const [shoppingCart, setShoppingCart] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState({});
    const [favoritos, setFavoritos] = useState([]);

    const urlServer = "http://localhost:3001";
    const endpoints = {
        user: "/usuarios",
        publicaciones: "/publicaciones"
    }

    const getData = async () => {
        const query = await fetch(urlServer + endpoints.publicaciones);
        const res = await query.json();
        setData(res);
    }

    const totalItems = shoppingCart.map(ele => ele.qty).reduce((a, b) => a + b, 0);

    const getFavoritos = async () => {
        const idUser = user[0].id;
        const data = await fetch("http://localhost:3001/favoritos/usuario/" + idUser);
        const res = await data.json();
        setFavoritos(res);
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <DataContext.Provider value={{
            data, setData, getData,
            shoppingCart, setShoppingCart, totalItems,
            isAuthenticated, setIsAuthenticated,
            user, setUser,
            getFavoritos, favoritos, setFavoritos
        }}>
            {children}
        </DataContext.Provider>
    )
}
