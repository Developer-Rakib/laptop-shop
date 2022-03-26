import React from 'react';
import Cart from '../Cart/Cart';

const Carts = ({ cartItems }) => {
    return (
        <div>
            <h4>Selected laptops</h4>
            {
                cartItems.map(cartItem => <Cart key={cartItem.id} cartItem={cartItem}></Cart>)
            }
            <button>Chose for Me</button>
            <button>Reset</button>
        </div>
    );
};

export default Carts;