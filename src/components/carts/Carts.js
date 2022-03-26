import React from 'react';
import Cart from '../Cart/Cart';

const Carts = ({ cartItems, choseItemHndle, randomItem }) => {
    // console.log(randomItem);
    return (
        <div>
            <h4>Selected laptops</h4>
            {
                cartItems.map(cartItem => <Cart key={cartItem.id} cartItem={cartItem}></Cart>)
            }
            <button onClick={choseItemHndle}>Chose for Me</button>
            <button>Reset</button>
            <div className='random-item'>
                <img src={randomItem.img} alt="" />
                <h4>Name: {randomItem.laptopName}</h4>
            </div>
        </div>
    );
};

export default Carts;