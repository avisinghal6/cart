import React from 'react';
import CartItem from './cartItem';
import Cart from './Cart';
import Navbar from './Navbar';


class App extends React.Component {
  constructor(){
    super();
    this.state={
        products: [ 
            {
                price: 99,
                title: 'watch',
                qty: 1,
                img: 'https://cdn-icons.flaticon.com/png/512/3109/premium/3109881.png?token=exp=1649963946~hmac=2e71e38a3e3d72f04dd6c6b53c0ed290',
                id: 1
            },
            {
                price: 909,
                title: 'mobile phone',
                qty: 1,
                img: 'https://cdn-icons.flaticon.com/png/512/2586/premium/2586488.png?token=exp=1649963971~hmac=042810909c2a163044c72cbde02eb3f8',
                id: 2
            },
            {
                price: 999,
                title: 'laptop',
                qty: 1,
                img: 'https://cdn-icons-png.flaticon.com/512/413/413837.png',
                id: 3
            },
        ]
    }

    
}

handleIncreaseQuantity= (product) => { 
    const {products} = this.state;
    const index = products.indexOf(product);

    products[index].qty+=1;
    this.setState({
        products : products
    })
}

handleDecreaseQuantity= (product) => { 
    const {products} = this.state;
    const index = products.indexOf(product);

    if(products[index].qty===0)
        return;
    products[index].qty-=1;
    this.setState({
        products : products
    })
}

handleDeleteProduct = (id) => {
    const {products} = this.state;

    const items = products.filter((item) => item.id!== id);
    this.setState({
        products: items
    })
}

getCartCount= ()=> {
  const {products} = this.state;

  let count=0;

  products.forEach((product) => {
    count+=product.qty;

  });

}

getCartTotal= ()=> {
  const {products} = this.state;

  let cartTotal=0;

  products.forEach((product) => {
    cartTotal=cartTotal +product.qty*product.price;

  });

  return cartTotal;
}

 
  render () {
    const {products} = this.state;
      return (
        <div className="App">
          <Navbar count={this.getCartCount()} />
          <h1> cart </h1>
          <Cart 
          products= {products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDelete= {this.handleDeleteProduct}
          />

          <div style={ {padding:10, fontSize:20}}> TOTAL: {this.getCartTotal()} </div>
        </div>
        );
      }
}

export default App;
