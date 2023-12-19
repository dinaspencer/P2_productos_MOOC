import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import SearchPage from './components/SearchPage';
import ProductDetail from './components/ProductDetail';
import RootLayout from './Root';
import {mockdata} from './constants/products';

const theproducts = mockdata.products;

const router = createBrowserRouter([
  {path: '/', 
  element: <RootLayout />, 
  errorElement: <ErrorPage />,
  children: [
  {index: true, element: <SearchPage theproducts={theproducts} />},
  {path: '/products/:productId', element: <ProductDetail />, errorElement: <ErrorPage /> }, 
  {path: '/not-found', element: <ErrorPage/>},
  {path: '/redirect', element: <Navigate to="/not-found" />},
  
  ],
}, 
]);

function App() {


  return (
    <div className="App">
    
      <RouterProvider router={router} />     
       
    </div>
  );
}

export default App;
