import Item from './item.js';
import React from 'react';
// import "./itemList.css";
export default function ItemList({ products, id}){
    return (
        <div className="itemList">
            {
            products.map((product) => <Item key={product._id} product={product} />)
            }
        </div>
    );
}
            
            
            
            