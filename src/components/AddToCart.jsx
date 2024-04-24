/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';

const AddToCartForm = () => {
    const [productID, setProductID] = useState('1');
    const [units, setUnits] = useState('1');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/addToCart.php', {
                productID: productID,
                units: units
            });
            setProductID(response.data);

            

            // Redirect to the cart page
            window.location.href = '/cart.php';
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="hidden" name="productID" value={productID} onChange={e => setProductID(e.target.value)} />
            <input type="number" name="units" min="1" value={units} onChange={e => setUnits(e.target.value)} />
            <input type="submit" value="Add to Cart" />
        </form>
    );
};

export default AddToCartForm;