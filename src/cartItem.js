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

    //testing
    //setState function can only be used when the component has rendered. Because it s a function of the React Component claas
    // and is available only after rendering, thats why we cannot use this.testing inside the constructor
    // to observe the synchronous behaviour of setState inside promises. Inside promises, setState does not do batching.
    //BUT THIS MIGHT HAVE BEEN FIXED IN THE LATEST VERSION AND THATS WHY IT MIGHT ALWAYS BE ASYNCHRONOUS AND BATCHING MIGHT BE PERFORMED EVERYWHERE.

    // testing =() =>{
    //     const promise = new Promise((resolve,reject) => {
    //         setTimeout(() =>{
    //             resolve('done');
    //         }, 5000);
    //     })

    //     promise.then(() => {
    //         //setState acts like a synchronous call

    //         this.setState({qty: 100});

    //         console.log('state', this.state);
    //     });
    // }

    increaseQuantity= () => { //used arrow functions as they inherit the scope of 'this'
        // console.log('this', this.state);
        //setState form 1, it helps to re render react components
        this.setState({
            qty:this.state.qty +1
        });

        //setState form 2, pass a callback
        // this.setState((prevState) => {
        //     return {
        //         qty: prevState.qty +1
        //     }
        // });
        }

    decreaseQuantity= () => { //used arrow functions as they inherit the scope of 'this'
        const {qty} = this.state;
        if(qty ===0)
            return;
        this.setState({
            qty:this.state.qty -1
        });
    
            //setState form 2, pass a callback
            // this.setState((prevState) => {
            //     return {
            //         qty: prevState.qty -1
            //     }
            // });
    }

        //Using setState function, React is actually doing shallow merging, which means it will only change the property
        // specified by us in the setState function, in this case 'qty', other properties will not be touched.
        // after changing the 'qty', 'render' function is called by react to rerender the page.

     render(){
        const { price, title, qty} = this.state; //object destructuring
        console.log("render");
        
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
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://as2.ftcdn.net/v2/jpg/01/26/10/59/1000_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg"
                            onClick= {this.increaseQuantity}
                            />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                            onClick= {this.decreaseQuantity}
                            />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1649883433~hmac=c6949f8279e1bc7575f66122a8a5ff47" 
                        />
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