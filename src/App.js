import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Spinner from 'react-bootstrap/Spinner';
import Header from './components/Header';
import { mockdata } from './constants/products';
import SearchPage from './components/SearchPage';

function App() {

  const products = mockdata.products;




  return (
    <div className="App">
      <Header />
      {/* <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner> */}
    <SearchPage theproducts={products} />

    </div>
  );
}

export default App;
