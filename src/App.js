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
                img: '',
                id: 1
            },
            {
                price: 909,
                title: 'mobile phone',
                qty: 1,
                img: '',
                id: 2
            },
            {
                price: 999,
                title: 'laptop',
                qty: 1,
                img: '',
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

    if(products[index].qty==0)
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
  render () {
    const {products} = this.state;
      return (
        <div className="App">
          <Navbar />
          <h1> cart </h1>
          <Cart 
          products= {products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDelete= {this.handleDeleteProduct}
          />
        </div>
        );
      }
}

export default App;
