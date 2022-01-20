import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css'

const Shop = () => {
    const [games, setGames] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./games.JSON')
            .then(res => res.json())
            .then(data => setGames(data));
    }, []);

    const handleCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        console.log(cart);
    }

    return (
        <div className='shop-container'>
            <div className='product-container-1'>
                {
                    games.map(game => <Product
                        key={game.key}
                        game={game}
                        handleCart={handleCart}
                    >
                    </Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;