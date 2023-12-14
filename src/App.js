import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Spinner from 'react-bootstrap/Spinner';
import Header from './components/Header';
import { mockdata } from './constants/products';
import SearchPage from './components/SearchPage';
import { useState } from 'react';


function App() {


  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [productList, setProductList] = useState(null);


  const products = mockdata.products;


  return (
    <div className="App">
      <Header />
      <Spinner animation="border" role="status" id="loading" className="spinner">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    <SearchPage theproducts={products} searchValue={searchValue} setSearchValue={setSearchValue} productList={productList} setProductList={setProductList} />

    </div>
  );
}

export default App;
