import React, { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';
import Laptop from '../Laptop/Laptop';
import './Laptops.css'


const Laptops = () => {
    let [laptopsData, setLaptops] = useState([]);
    let [cartItems, setCartItems] = useState([]);

    // fecth data 
    useEffect(() => {
        fetch('laptop.json')
            .then(res => res.json())
            .then(data => setLaptops(data))
    }, [])

    // spacify cartItems 
    let unicIds = [];
    let unicItems = [];
    let itemIds = cartItems.map(itm => itm.id)
    itemIds.forEach(id => {
        if (!unicIds.includes(id)) {
            unicIds.push(id);
            for (const cartItem of cartItems) {
                if (cartItem.id === id) {
                    unicItems.push(cartItem);
                    break;
                }
            }
        }
    });

    // handle add to cart 
    const hndleCart = (selectedItems) => {
        if (unicItems.length > 3) {
            alert("You cannot Add more than 4");
            return
        }
        setCartItems([...cartItems, selectedItems])
    }


    // handle choose items 
    const choseItemHndle = () => {
        if (cartItems.length === 0) {
            alert("Please Choose Product")
            return;
        }
        let randomIndex = Math.floor(Math.random() * (cartItems.length - 0) + 0);
        let randomLaptop = cartItems[randomIndex];
        setCartItems([randomLaptop])
    }

    // handle reset all 
    const resetCart = () => {
        setCartItems([])
    }

    return (
        <div style={{ display: "flex", position: "relative" }}>
            <div className='laptops-container'>
                {
                    laptopsData.map(laptopData => <Laptop key={laptopData.id} laptopData={laptopData} hndleCart={hndleCart}></Laptop>)
                }
            </div>
            <div className='carts-container'>
                <Carts unicItems={unicItems} choseItemHndle={choseItemHndle} resetCart={resetCart}></Carts>
            </div>

        </div>

    );
};

export default Laptops;