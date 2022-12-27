import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import Error404 from './components/Error404';
import CartContextProvider from './components/Context/CartContext';
import Cart from './components/Cart';


function App() {
  return (
    <CartContextProvider>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App;