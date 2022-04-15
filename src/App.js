import React from 'react';
import CartItem from './cartItem';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';

class App extends React.Component {
  constructor(){
    super();
    this.state={
        products: [],
        loading :true
    }

    this.db= firebase.firestore();

    
}

componentDidMount () {
  // firebase
  //   .firestore()
  //   .collection('products')
  //   .get()
  //   .then((snapshot) => {
  //     // console.log(snapshot);
  //     snapshot.docs.map((doc) => { //docs is an array
  //     //  console.log(doc.data);

  //     });
      
  //     const products = snapshot.docs.map((doc) => {
  //       const data= doc.data();
  //       data['id']= doc.id;
  //       return data;
  //     });

  //     this.setState({
  //       products,
  //       loading: false
  //     })
  //   })


  this.db
  .collection('products')
  .onSnapshot((snapshot) => { //added a listener
    // console.log(snapshot);
    snapshot.docs.map((doc) => { //docs is an array
    //  console.log(doc.data);

    });
    
    const products = snapshot.docs.map((doc) => {
      const data= doc.data();
      data['id']= doc.id;
      return data;
    });

    this.setState({
      products,
      loading: false
    })
  })
  
}

handleIncreaseQuantity= (product) => {  
    const {products} = this.state;
    const index = products.indexOf(product);

    const docRef= this.db.collection('products').doc(products[index].id);

    docRef
    .update({
      qty: products[index].qty+1
    })
    .then(() => {
      console.log('updated successfully');
    })
    .catch((err) => {
      console.log("error",err)
    })
    // products[index].qty+=1;
    // this.setState({
    //     products : products
    // })
}

handleDecreaseQuantity= (product) => { 
    const {products} = this.state;
    const index = products.indexOf(product);

    if(products[index].qty===0)
        return;

    const docRef= this.db.collection('products').doc(products[index].id);

    docRef
     .update({
      qty: products[index].qty-1
      })
      .then(() => {
        console.log('updated successfully');
      })
      .catch((err) => {
        console.log("error",err)
      })
    // products[index].qty-=1;
    // this.setState({
    //     products : products
    // })
}

handleDeleteProduct = (id) => {
    const {products} = this.state;

    const docRef= this.db.collection('products').doc(id);

    docRef
      .delete()
      .then(() => {
        console.log('deleted successfully')
      })
      .catch((err) => {
        console.log("error",err)
      })
    // const items = products.filter((item) => item.id!== id);
    // this.setState({
    //     products: items
    // })
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

addProduct =() => {
  this.db
    .collection('products')
    .add({
      img: '',
      price: 900,
      qty:3,
      title: 'washing machine'
    })
    //returns a promise
    .then((docref) => {
      console.log("product added",docref);
    })
    .catch((err) =>{
      console.log('error',err)
    })
}
  render () {
    const {products, loading} = this.state;
      return (
        <div className="App">
          <Navbar count={this.getCartCount()} />
          {/* {<button onClick= {this.addProduct} style= {{padding:20, fontSize:20}}> Add a product </button>} */}
          <h1> cart </h1>
          <Cart 
          products= {products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDelete= {this.handleDeleteProduct}
          />
        {loading && <h1> loading products ..</h1>}
          <div style={ {padding:10, fontSize:20}}> TOTAL: {this.getCartTotal()} </div>
        </div>
        );
      }
}

export default App;
