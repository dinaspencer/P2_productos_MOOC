
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import CardGroup from 'react-bootstrap/CardGroup';
import {useState, useEffect} from 'react';
import CONFIG from '../config/config';


export default function SearchPage(props) {
    
  const theproducts = props.theproducts;
  
  const [selected, setSelected] = useState('All');
  const [searchValue, setSearchValue] = useState('');
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(null);

  //CALL SERVER  GET PRODUCTS
  useEffect(()=>{
    async function getProducts () {
      if (CONFIG.use_server) {
       
          const response = await fetch("https://dummyjson.com/products");
          const list = await response.json();
          
          setProductList(list.products);
          setError(null);
          console.log(productList);

        } else if (!CONFIG.use_server) {
         
          setProductList(theproducts);
          setError(null);
          console.log(productList);
    }
    
     
  }
  getProducts();

  }, []);

   

  //TO FILTER THE DROPDOWN
   let filterCats = productList.reduce((accumulator, current) => {
    if (
      !accumulator.some(
        (item) => item.category === current.category
        //  && item.name === current.name,
      )
    ) {
      accumulator.push(current);
    }
    return accumulator;
  }, []);



  //FILTER RESULTS
  
    const filteredListSearch = productList.filter((product) => {
       if (product.title.toLowerCase().includes(searchValue.toLowerCase()) || product.description.toLowerCase().includes(searchValue.toLowerCase())) {
          return true;
       }
       return false; 
     });
  
  function searchChangeHandler() {
    setProductList(filteredListSearch);
    console.log(filteredListSearch);
  }

  const filteredListSelect = productList.filter((product) => {
    if (product.category === selected) {
      return true;
    }
    return false;
  });

  function selectChangeHandler() {
  setProductList(filteredListSelect);
    console.log(filteredListSelect);
  }

  function buttonHandler() {
    console.log("open product page!")
  }


//    how to make productList update with setProductList and repaint
// https://stackoverflow.com/questions/58893340/filter-array-of-objects-based-on-input-field-in-react

    return (
    <div id="search-page-wrapper">
            
    <CardGroup style={{ margin: '32px 64px' }}>
      <Card style={{ padding: '24px' }}>
        <Card.Body>
          <Card.Title>Buscar</Card.Title>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Control type="text" value={searchValue} placeholder="Escribe lo que quieres buscar" onChange={e=>setSearchValue(e.target.value)} /> 
            </Form.Group>
            <Button variant="primary" onClick={searchChangeHandler}>Buscar</Button>
            </Form>
        </Card.Body>
      </Card>
      <Card style={{ padding: '24px' }}>
        <Card.Body>
          <Card.Title>Filtrar</Card.Title>
          <Form.Select aria-label="Default select example" 
          id="selector"
          onChange={e => setSelected(e.target.value)}
          
          >
            <option value="All">All</option>
            {filteredListSelect && filterCats.map(products=>{
               return <option className="category" key={products.category} value={products.category}>{products.category.toUpperCase()}  </option>})}
            </Form.Select>
            <Button variant="primary" onClick={selectChangeHandler}>Filtrar</Button>
        </Card.Body>
      </Card>
    </CardGroup>
           
          <div id="productosresultados">
            <ul>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4 product-row">
               {selected && productList.map(item=>{
                    return <li className="unproducto" key={item.id}> 
                    <Col>
                    <Card>
                    <Card.Img variant="top" src={item.thumbnail} alt={item.title} />
                    <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description.substr(0,22) + '...'}</Card.Text>
                    {/* import Link and connect productId as param */}
                    <Button variant="primary" onClick={buttonHandler}>VER</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    </li>
               }
                )}
            </Row>
            </ul>
          </div>
          


        </div>
    )
}