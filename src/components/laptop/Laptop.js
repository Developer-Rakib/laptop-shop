import React from 'react';
import './Laptop.css';
import { BsCartPlus } from 'react-icons/bs';

const Laptop = ({ laptopData, hndleCart }) => {
    let { img, laptopName, processor, storage, price } = laptopData
    return (
        <div className='laptop-container'>

            <img src={img} alt="" />
            <div className='laptop-info'>
                <h5>{laptopName}</h5>
                <h5>Price: {price}</h5>
                <ul>
                    <li>{processor}</li>
                    <li>{storage}</li>
                </ul>
            </div>
            <button onClick={() => hndleCart(laptopData)}>Add to Cart <BsCartPlus></BsCartPlus></button>
        </div>
    );
};

export default Laptop;