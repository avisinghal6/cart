import React from 'react';

class CartItem extends React.Component{
    // in order to make a class component a 'REACT' component, we need to give it a method 'render'
    constructor(){
        super();
        this.state={
            price: 999,
            title: 'phone',
            qty:1,
            img: ''
        }


    }
    render(){
        const { price, title, qty} = this.state; //object destructuring
        return (
            
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />

                </div>

                <div className="right-block">
                    <div style= { { fontSize: 25}}> {title}</div>
                    <div style= { { color: '#777'}}> Rs. {price} </div>
                    <div style= { { color: '#777'}}> Qty: {qty} </div>
                    <div className="cart-item-actions">
                        {/* {buttons} */}
                        <img alt="increase" className="action-icons" src="https://as2.ftcdn.net/v2/jpg/01/26/10/59/1000_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg" />
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                        <img alt="delete" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1649883433~hmac=c6949f8279e1bc7575f66122a8a5ff47" />
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
        background: '#ccc'
    }
}
export default CartItem;