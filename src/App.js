import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import { mockdata } from './constants/products';
import SearchPage from './components/SearchPage';
// import { useState } from 'react';
// import { Routes, Route, useParams } from 'react-router-dom';
// import ProductPage from './ProductPage';
// import ErrorPage from './ErrorPage';



function App() {


  
  

  const products = mockdata.products;



  return (
    <div className="App">
      <Header />
     
    <SearchPage theproducts={products} />


    {/* <Routes>
            <Route path="/" element={<SearchPage/>} errorElement={<ErrorPage/>}/>
            <Route path="/products" element={<SearchPage />} errorElement={<ErrorPage />} />
            <Route path="/product/:productId" element={<ProductPage />} errorElement={<ErrorPage/>} />
          </Routes> */}

    </div>
  );
}

export default App;
