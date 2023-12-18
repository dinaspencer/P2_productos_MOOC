import Location from '../Location';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function ProductDetail({products}) {
    return (
        <div>
             <h2>title</h2>
            <Card>
            <Card.Img variant="top" className="product-image" />
                    <Card.Body>
                    <Card.Title>{products.title}</Card.Title>
                    <Card.Text>{products.description}</Card.Text>
                    <Link to="/"><Button variant="primary">
                      Volver</Button></Link>
                      
                    </Card.Body>
                    </Card>
            
            <Location />
        </div>
       
    )
}