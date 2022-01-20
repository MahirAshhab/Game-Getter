import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cartIcon = <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>;
    const { cart } = props;
    let cost = 0;
    let tax = 0;
    let totalCost = 0;
    for (const product of cart) {
        console.log(product);
        cost = cost + product.price;
        tax = cost * 0.10;
        totalCost = cost + tax;
    }

    return (
        <div className='cart-con'>
            <h2>{cartIcon}</h2>
            <h4>Games Added: {props.cart.length}</h4>
            <div className='cost-table'>
                <div className='title'>
                    <h5>Cost: </h5>
                    <h5>Tax: </h5>
                    <h5>Total Cost:</h5>
                </div>
                <div className='number'>
                    <h5>{cost.toFixed(2)}</h5>
                    <h5>{tax.toFixed(2)}</h5>
                    <h5>{totalCost.toFixed(2)}</h5>
                </div>
            </div>

        </div>
    );
};

export default Cart;