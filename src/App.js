import React from 'react';
// import { createBrowserRouterBrowserRouter,Routes , Route ,NavLink, Router } from 'react-router-dom';
import {NavLink, Outlet} from 'react-router-dom';


// import ProductDetails from './components/ProductDetails';
// import { useApi } from './hooks/useApi';
import './App.css';

function App() {
    // // Fetch products using the custom hook
    // const { data: products } = useApi("http://localhost:3000/products");

    return (
      <div className="App">
         <header>
            <nav>
                <h1>My-Shop</h1>
                <div className="spacer"></div>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                <NavLink to="/products">Products</NavLink>
                </nav>
                </header>
                <main>
                    <Outlet / >

                </main>
            </div>
    );
}

              
    


export default App;
