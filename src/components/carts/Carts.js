import React from 'react';
import Cart from '../Cart/Cart';
import './Carts.css'

const Carts = ({ unicItems, choseItemHndle, resetCart }) => {



    return (
        <div>
            <h4>Selected laptops</h4>
            {
                unicItems.map(cartItem => <Cart key={cartItem.id} cartItem={cartItem}></Cart>)
            }
            <button onClick={choseItemHndle}>Chose for Me</button>
            <button onClick={resetCart}>Reset</button>
        </div>
    );
};

export default Carts;