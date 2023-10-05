import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import axios from "axios";
import './style.scss';


const PublicarProducto = () => {
    const { user, getData } = useContext(DataContext);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState("");
    const [price, setPrice] = useState(0);
    const [imageUrl, setImageUrl] = useState("");
    const [product, setProduct] = useState({});
    console.log(DataContext)

    const postProduct = async () => {
        try {
            const res = await axios.post("http://localhost:3001/publicaciones", {data: product});
            console.log(product);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (Object.keys(product).length !== 0) {
            postProduct();
            setTitle("");
            setDescription("");
            setStock("");
            setPrice(0);
            setImageUrl("");
        }
    }, [product]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const idUser = user[0].id;

        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0]; 

        const newProduct = {
            id_usuario: idUser,
            titulo: title,
            descripcion: description,
            stock: stock,
            precio: parseFloat(price),
            fecha_publicacion: formattedDate,
            img: imageUrl,
        };

        console.log(newProduct)

        setProduct(newProduct);

        await getData();
    };

    return (
        <div className="publicarproducto-form">
            <h1>Publica tu producto</h1>
            <h5 style={{ marginBottom: "50px"} }>Incluye un título, una descripcion breve, el stock y una imágen.</h5>
                <form onSubmit={handleSubmit}>
                    <label>Título
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            /></label>
                    <label>Descripción
                    <textarea
                            className="form-control"
                            id="description"
                            rows="3"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                    ></textarea></label>
                    <label>Stock
                        <input
                            type="number"
                            className="form-control"
                            id="stock"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            required
                        /></label>
                    <label>Precio
                        <input
                            type="number"
                            className="form-control"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            min="1"
                            required
                        /></label>
                    <label>Imágen URL
                        <input
                            type="text"
                            className="form-control"
                            id="imageUrl"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            required
                        /></label>
            <button type='submit' className='btn btn-secondary'>Publicar producto</button>
            </form>
        </div>
    );
};

export default PublicarProducto;
