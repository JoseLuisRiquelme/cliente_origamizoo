import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../context/DataContext';
import axios from 'axios';
import Message from '../components/Mensaje';
import './style.scss';

const EditItem = () => {

    const { id: itemId } = useParams();

    const { user } = useContext(DataContext);

    const [productEdit, setProductEdit] = useState([])
    const [titulo, setTitulo] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [stock, setStock] = useState("")
    const [precio, setPrecio] = useState("")
    const [url, setUrl] = useState("")
    const [message, setMessage] = useState(false);
    const [loading, setLoading] = useState(true);

    const getProduct = async () => {
        const userId = user[0].id;
        const data = await fetch(`http://localhost:3001/usuario/${userId}/publicacion/${itemId}`);
        const res = await data.json();
        setProductEdit(res);
    }

    const setform = async () => {
        try {
            setTitulo(productEdit[0].titulo);
            setDescripcion(productEdit[0].descripcion);
            setStock(productEdit[0].stock);
            setPrecio(productEdit[0].precio);
            setUrl(productEdit[0].img);
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
    }

    const updateProduct = async () => {
        try {
            const userId = user[0].id;
            const query = await axios.put(`http://localhost:3001/usuario/${userId}/publicacion/${itemId}`,
                { titulo: titulo, descripcion: descripcion, stock: stock, precio: precio, url: url });
            query.status && setMessage(true);
        } catch (error) {
            console.warn(error)
        }
    }

    useEffect(() => {
        getProduct()
    }, [itemId])

    useEffect(() => {
        setform()
    }, [productEdit])

    const handleSubmint = (e) => {
        e.preventDefault();
        updateProduct();
    }

    return (
        <div className='editItem-form'>
            {loading ? "cargando" :
                <form onSubmit={handleSubmint}>
                    <label>Título:
                        <input className="form-control" type='text' value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    </label>
                    <label>Descripción:
                    <textarea className="form-control" type='text' rows='3' value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                    </label>
                    <label>Stock:
                        <input className="form-control" type='number' min="1" value={stock} onChange={(e) => setStock(e.target.value)} />
                    </label>
                    <label>Precio:
                        <input className="form-control" type='number' min="1" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                    </label>
                    <label>Imágen URL:
                        <input className="form-control" type='text' value={url} onChange={(e) => setUrl(e.target.value)} />
                    </label>
                    <button type='submit'className='btn btn-secondary'>Editar</button>
                    {message && <Message message={"Producto modificado con éxito"} />}
                </form>}
        </div>
    )
}

export default EditItem
