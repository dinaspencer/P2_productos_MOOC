import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import SearchPage from './SearchPage';
import ProductDetail from './ProductDetail';
import RootLayout from './Root';
import {mockdata} from './constants/products';

const theproducts = mockdata.products;

const router = createBrowserRouter([
  {path: '/', 
  element: <RootLayout />, 
  errorElement: <ErrorPage />,
  children: [
  {index: true, element: <SearchPage theproducts={theproducts}/>, errorElement: <ErrorPage />},
  {path: '/products/:productId', element: <ProductDetail />, errorElement: <ErrorPage /> }, 
  {path: '/not-found', element: <ErrorPage/>},
  {path: '/redirect', element: <Navigate to="/not-found" />},
  
  ],
}, 
]);

function App() {


  return (
    <div className="App">
        {/* <BrowserRouter> */}
           <RouterProvider router={router} />     
       {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
