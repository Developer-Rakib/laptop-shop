import React, { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';
import Laptop from '../Laptop/Laptop';
import './Laptops.css'

import './Laptops.css';

const Laptops = () => {
    let [laptopsData, setLaptops] = useState([]);
    let [cartItems, setCartItems] = useState([])
    let [randomItem, setRandomItem] = useState([])
    useEffect(() => {
        fetch('laptop.json')
            .then(res => res.json())
            .then(data => setLaptops(data))
    }, [])

    const hndleCart = (selectedItems) => {
        setCartItems([...cartItems, selectedItems])
    }
    const choseItemHndle = () => {
        let randomIndex = Math.floor(Math.random() * (cartItems.length - 0) + 0);
        // let randomID = Math.floor(Math.random() * (1010 - 1001 + 1) + 1001);
        let randomLaptop = cartItems[randomIndex];
        setRandomItem(randomLaptop)

    }
    return (
        <div style={{ display: "flex", position: "relative" }}>
            <div className='laptops-container'>
                {
                    laptopsData.map(laptopData => <Laptop key={laptopData.id} laptopData={laptopData} hndleCart={hndleCart}></Laptop>)
                }
            </div>
            <div className='carts-container'>
                <Carts cartItems={cartItems} choseItemHndle={choseItemHndle} randomItem={randomItem}></Carts>
            </div>

        </div>

    );
};

export default Laptops;