import React from 'react';
import './Laptop.css';

const Laptop = ({ laptopData }) => {
    console.log(laptopData);
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
            <button>Add to Cart</button>
        </div>
    );
};

export default Laptop;