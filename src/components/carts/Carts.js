import React from 'react';
import Cart from '../Cart/Cart';
import './Carts.css'

const Carts = ({ cartItems, choseItemHndle }) => {
    return (
        <div>
            <h4>Selected laptops</h4>
            {
                cartItems.map(cartItem => <Cart key={cartItem.id} cartItem={cartItem}></Cart>)
            }
            <button onClick={choseItemHndle}>Chose for Me</button>
            <button>Reset</button>
        </div>
    );
};

export default Carts;