
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import CardGroup from 'react-bootstrap/CardGroup';




export default function SearchPage(props) {
    
    const theproducts = props.theproducts; 


   let filterCats = theproducts.reduce((accumulator, current) => {
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


   const filteredList = theproducts.filter((product) => {
    if (!props.searchValue) return true
     if (product.title.toLowerCase().includes(props.searchValue.toLowerCase()) || product.description.toLowerCase().includes(props.searchValue.toLowerCase())) {
        return true;
     }
    
   })

   function showFilterList() {
    props.setProductList(filteredList);
    console.log(filteredList);
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
             <Form.Control type="text" value={props.searchValue} placeholder="Escribe lo que quieres buscar" onChange={e=>props.setSearchValue(e.target.value)} /> 
            </Form.Group>
            <Button variant="primary" onClick={showFilterList}>Buscar</Button>
            </Form>
        </Card.Body>
      </Card>
      <Card style={{ padding: '24px' }}>
        <Card.Body>
          <Card.Title>Filtrar</Card.Title>
          <Form.Select aria-label="Default select example" id="selector">
            <option value="All">All</option>
            {filterCats.map(products=>{
               return <option className="category" key={products.category} value={products.category}>{products.category}</option>})}
            </Form.Select>
        </Card.Body>
      </Card>
    </CardGroup>
           
          <div id="productosresultados">
            <ul>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4 product-row">
               {theproducts.map(item=>{
                    return <li className="unproducto" key={item.id}> 
                    <Col>
                    <Card>
                    <Card.Img variant="top" src={item.thumbnail} alt={item.title} />
                    <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Button variant="primary">VER</Button>
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