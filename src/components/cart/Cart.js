import React from 'react';
import './Cart.css';

const Cart = ({ cartItem }) => {
    let { img, laptopName, processor, storage, price } = cartItem;
    console.log(cartItem);
    return (
        <div className='cart-container'>
            <img src={img} alt="" />
            <div className='cart-info'>
                <h5>{laptopName.slice(0, 25)}</h5>
                <h4>{price}</h4>
            </div>

        </div>
    );
};

export default Cart;