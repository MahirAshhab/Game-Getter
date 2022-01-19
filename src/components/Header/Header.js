import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Header.css'

const Header = () => {
    const wallet = <FontAwesomeIcon icon={faWallet}></FontAwesomeIcon>;
    return (
        <div className="header-container">
            <h1>GameGetter</h1>
            <h3>HEART OF PERFECT GAMING</h3>
            <p>{wallet} &nbsp; $100</p>
        </div>
    );
};

export default Header;