import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import '../views/style.scss'

const CardsShoppingCart = ({ data }) => {

    const {shoppingCart, setShoppingCart} = useContext(DataContext);

    const plusQty = () => {
        const plusProduct = shoppingCart.map(ele => ele.id === data.id ? {...ele, qty: ele.qty + 1} : ele);
        setShoppingCart([...plusProduct]);
    }

    const lessQty = () => {
        const lessProduct = shoppingCart.map(ele => ele.id === data.id ? {...ele, qty: Math.max(0, ele.qty - 1)} : ele);
        setShoppingCart([...lessProduct]);
    }

    if (data.qty === 0) {
        return null; // Retorna null si la cantidad es cero
    }

    return (
        <div className='cardCC-container'>
            <div className='cardCC-left'>
                <img className='cardCCImg' src={data.img} alt="" />
                <div className="cardCC-text">
            <h5>{data.titulo}</h5>
            <p>{data.descripcion}</p>
            <p>${data.precio}</p>
        </div>
            </div>
            <div className='cardCC-right'>
                <button  className="btn btn-danger" onClick={lessQty}>-</button>
                <p>{data.qty}</p>
                <button className="btn btn-secondary" disabled={data.qty >= data.stock} onClick={plusQty}>+</button>
            </div>
        </div>
    )
}

export default CardsShoppingCart