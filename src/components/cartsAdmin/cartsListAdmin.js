import React from 'react';
import CartAdminItem from './cartAdminItem';
export default function CartsListAdmin({carts}){
    return (
        <div className="item-container">
            <p>Administrador de pedidos.</p>
            {
            carts.map((c) => <CartAdminItem key={c.user} cart={c}/>)
            }
        </div>
    );
}
            
            
            