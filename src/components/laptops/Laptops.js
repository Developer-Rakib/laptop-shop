import React, { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';
import Laptop from '../Laptop/Laptop';
import './Laptops.css'

import './Laptops.css';

const Laptops = () => {
    let [laptopsData, setLaptops] = useState([]);
    let [cartItems, setCartItems] = useState([])
    useEffect(() => {
        fetch('laptop.json')
            .then(res => res.json())
            .then(data => setLaptops(data))
    }, [])

    const hndleCart = (selectedItems) => {
        setCartItems([...cartItems, selectedItems])
    }
    return (
        <div style={{ display: "flex", position: "relative" }}>
            <div className='laptops-container'>
                {
                    laptopsData.map(laptopData => <Laptop key={laptopData.id} laptopData={laptopData} hndleCart={hndleCart}></Laptop>)
                }
            </div>
            <div className='carts-container'>
                <Carts cartItems={cartItems}></Carts>
            </div>
        </div>

    );
};

export default Laptops;