import React from 'react';

class CartItem extends React.Component{
    // in order to make a class component a 'REACT' component, we need to give it a method 'render'

    render(){
        return (
            
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />

                </div>

                <div className="right-block">
                    <div style= { { fontSize: 25}}> Phone</div>
                    <div style= { { color: '#777'}}> Rs. 999 </div>
                    <div style= { { color: '#777'}}> Qty: 1 </div>
                    <div className="cart-item-actions">
                        {/* {buttons} */}
                        
                    </div>                    
                </div>
            </div>
        )
        
    }
}

//for inline css in JSX
const styles={
    image: {
        height:110,
        width:110,
        borderRadius: 4,
        background: '#cc'
    }
}
export default CartItem;