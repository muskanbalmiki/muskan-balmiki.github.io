import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorPage from './pages/ErrorPage';
import App from './App';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.css';

const router = createBrowserRouter([
    {
        path: '/',
        element:<App/>,
        errorElement:<ErrorPage />,
        children : [
            {
                index:true,
                element: <Home/>

            },
            {
                path:'/home',
                element : <Home />
            },
            {
                path:'/contact',
                element : <Contact />
            },
            {
                path:'/products',
                element : <Products />
            },
            {
                path: '/products/:prodId',
                element: <ProductDetails />
            }
          
        ]
        
    }
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   <RouterProvider router={router} />
);  

