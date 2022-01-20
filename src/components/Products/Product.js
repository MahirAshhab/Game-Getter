import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const cart = <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>;
    const { name, image, developer, publisher, release, price } = props.game;
    return (
        <div className='product-container-2'>
            <div className='image-container'>
                <img src={image} alt="" />
            </div>
            <div className='detail-container'>
                <div className='title'>
                    <h2 id='name'>{name}</h2>
                </div>
                <div className='details'>
                    <h4>{release}</h4>
                    <h4>{developer}</h4>
                    <h4>{publisher}</h4>
                    <h2 id='price'>$ {price}</h2>
                </div>

            </div>
            <div className='button-container'>
                <button onClick={() => props.handleCart(props.game)}>{cart}&nbsp; ADD TO CART</button>
            </div>
            <div className='icon-container'>
                <i class="fab fa-playstation" id='ps'></i>
                <i class="fab fa-xbox" id='xbox'></i>
                <i class="fab fa-windows" id='windows'></i>
            </div>

        </div>
    );
};

export default Product;
