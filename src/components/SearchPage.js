
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import CardGroup from 'react-bootstrap/CardGroup';
import {useState, useEffect} from 'react';
import CONFIG from '../config/config';
import Spinner from 'react-bootstrap/Spinner';
import { Link} from 'react-router-dom';



export default function SearchPage(props) {
    
  const theproducts = props.theproducts;
  
  const [selected, setSelected] = useState('All');
  const [searchValue, setSearchValue] = useState('');
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);



//CALL SERVER
  async function getProducts() {
   if (CONFIG.use_server) {
    setLoading(true);
    
      await fetch(CONFIG.server_url)
    
        .then(response => {
          if (response.status === 200) {
            return response.json();
          } else {
            const resp = response.json().then(data => data);
            resp.then(data => setError(data));
          }
          
        })
        .then(data => {
          if (selected !== "All") setProductList(data.products.filter(product => product.category === selected))

          else if (searchValue !== "") setProductList(data.products.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase())))

          else setProductList(data.products);
          setTimeout(() => setLoading(false), CONFIG.loading_timeout_ms);
        })

        .catch(error => {
          setError(JSON.stringify({
            cod: 400,
            message: error.message
          }));

        })
        
    } else if (!CONFIG.use_server) {

    setProductList(theproducts);    
    setLoading(false);
    }
  }
  
  //CALL SERVER ON LOAD
    useEffect(()=>{
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
            <Button variant="primary" onClick={getProducts}>Buscar</Button>
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
            {filterCats.map(products=>{
               return <option className="category" key={products.category} value={products.category}>{products.category.toUpperCase()}  </option>})}
            </Form.Select>
            <Button variant="primary" onClick={getProducts}>Filtrar</Button>
        </Card.Body>
      </Card>
    </CardGroup>
           
          <div id="productosresultados">
            {loading ?  <Spinner animation="border" role="status" id="loading"  className="spinner">
      <span className="visually-hidden">Loading...</span></Spinner> 
            : 
            <ul>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4 product-row">
               {productList.map((item, index)=>{
                    return <li className="unproducto" key={item.id}> 
                    <Col>
                    <Card className="product-card">
                    <Card.Img variant="top" className="product-image" src={item.thumbnail} alt={item.title} />
                    <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description.substr(0,22) + '...'}</Card.Text>
                    <Link 
                    to={{pathname: `/products/${item.id-1}`}} 
                    state={{item}}>
                      <Button variant="primary">
                      VER</Button></Link>
                      
                    </Card.Body>
                    </Card>
                    </Col>
                    </li>
               }
                )}
            </Row>
            </ul>
            }
          </div>
          
        </div>
    )
}