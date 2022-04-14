import React from "react";
import CartItem from "./cartItem";

const Cart =(props) => {
    
    
        const {products} = props; //destructuring to get only the required data
        return (
            <div className="cart">
               {products.map((product) => {
                    return (
                        <CartItem 
                            product= {product} 
                            key = {product.id} 
                            onIncreaseQuantity={props.onIncreaseQuantity}
                            onDecreaseQuantity={props.onDecreaseQuantity}
                            onDelete= {props.onDelete}
                        />
                    )
                })}

            </div>
        )
    

}

export default Cart;