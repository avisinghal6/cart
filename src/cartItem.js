import React from 'react';

const CartItem= (props) =>{
    
        const { price, title, qty, img} = props.product; //object destructuring
        // console.log("render");
        
        return (
            
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src= {img} />

                </div>

                <div className="right-block">
                    <div style= { { fontSize: 25}}> {title}</div>
                    <div style= { { color: '#777'}}> Rs. {price} </div>
                    <div style= { { color: '#777'}}> Qty: {qty} </div>
                    <div className="cart-item-actions">
                        {/* {buttons} */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://as2.ftcdn.net/v2/jpg/01/26/10/59/1000_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg"
                            onClick= {() => props.onIncreaseQuantity(props.product)}
                            />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                            onClick= {() => props.onDecreaseQuantity(props.product)}
                            />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1649883433~hmac=c6949f8279e1bc7575f66122a8a5ff47" 
                            onClick= {()=> props.onDelete(props.product.id)}
                        />
                    </div>                    
                </div>
            </div>
        )
        
}

//for inline css in JSX
const styles={
    image: {
        height:110,
        width:110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;