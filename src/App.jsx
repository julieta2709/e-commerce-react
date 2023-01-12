import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import NavBar from './Features/NavBar';
import Error404 from './Errors/Error404';
import CartContextProvider from './Context/CartContext';
import Cart from './components/Cart';
import FinCompra from './components/FinCompra';
import Salida from './components/Salida';
import Footer from './Features/Footer';


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
            <Route path={"/fincompra"} element={<FinCompra />} />
            <Route path={"/salida/:id"} element={<Salida />} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App;