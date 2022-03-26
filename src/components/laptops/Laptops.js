import React, { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';
import Laptop from '../Laptop/Laptop';
import './Laptops.css'

import './Laptops.css';

const Laptops = () => {
    let [laptopsData, setLaptops] = useState([]);
    useEffect(() => {
        fetch('laptop.json')
            .then(res => res.json())
            .then(data => setLaptops(data))
    }, [])
    return (
        <div style={{ display: "flex" }}>
            <div className='laptops-container'>
                {
                    laptopsData.map(laptopData => <Laptop key={laptopData.id} laptopData={laptopData}></Laptop>)
                }
            </div>
            <div className='carts-container'>
                <Carts></Carts>
            </div>
        </div>

    );
};

export default Laptops;