import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { Routes, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import SearchPage from './components/SearchPage';
import ProductDetail from './components/ProductDetail';
import RootLayout from './Root';


const router = createBrowserRouter([
  {path: '/', 
  element: <RootLayout />, 
  errorElement: <ErrorPage />,
  children: [
  {index: true, element: <SearchPage />,
    children: [
     {path: '/products/:productId', element: <ProductDetail products={productList}/>, errorElement: <ErrorPage /> }, 
  ]
},
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
