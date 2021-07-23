import React, { Fragment, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CartAside from './components/CartAside';
import Header from './components/Header';
import { ProductItem } from './models';
import HomePage from './pages/Home';
import DetailPage from './pages/DetailPage';

function App() {
  let [isCartOpen, setCartState] = useState(false);
  let [cart, setCart] = useState<{ id: number, quantity: number }[]>([]);

  function addToCart(productId: number, quantity = 1) {
    let items = cart.find((product) => product.id == productId);
    if (items) {
      items.quantity += quantity;
    } else {
      cart.push({ id: productId, quantity });
    }
    setCart([...cart]);
  }

  return (
    <Router>
        <Header onCartClick={() => setCartState(true)} />
        <CartAside 
          cart={cart}
          isCartOpen={isCartOpen}
          resetCart={() => setCart([])}
          closeCart={() => setCartState(false)}
        />

        <Switch>
          <Route path="/about">
            <div>About Page</div>
          </Route>
          <Route path="/products/:id">
            <DetailPage />
          </Route>
          <Route path="/">
            <HomePage addToCart={addToCart} />
          </Route>
        </Switch>
    </Router>
  );
}

export default App
