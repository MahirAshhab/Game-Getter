import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

const Shop = () => {
    const [games, setGames] = useState([]);
    useEffect(() => {
        fetch('./games.JSON')
            .then(res => res.json())
            .then(data => setGames(data));
    }, []);
    console.log(games);

    return (
        <div>

        </div>
    );
};

export default Shop;