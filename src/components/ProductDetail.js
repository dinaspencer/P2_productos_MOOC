import Location from '../Location';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";


export default function ProductDetail() {

    const location = useLocation(); 
	
	const productInfo = location.state;
	// console.log(productInfo);

    const checkDiscount = productInfo.item.discountPercentage;
    const discount = productInfo.item.discountPercentage / 100;
    const origPrice = productInfo.item.price;
    const calcDiscount = origPrice * discount;

    const salePrice = origPrice - calcDiscount;
    // console.log(salePrice.toFixed(2));
    

    return (
        <div>
            <Card className="product-detail-card" style={{padding: '48px'}}>
                    <Card.Body>
                    <Card.Img variant="top" className="product-detail-image" style={{width: '300px'}} src={productInfo.item.images[0]} alt={productInfo.item.title} />
                    <Card.Title id="titulo" className="product-detail-title"><h1>{productInfo.item.title}</h1></Card.Title>
                   <h2>{origPrice.toFixed(2) + ' €'}</h2>
                  {checkDiscount && <h4 style={{color: 'red'}}>{'Precio rebajado! Ahora solo ' + salePrice.toFixed(2) + ' €'}</h4>}
                    <Card.Text>{productInfo.item.description}</Card.Text>
                    <Link to="/"><Button variant="primary">
                      Volver</Button></Link>  
                    </Card.Body>
                    
                    </Card>
            <Location />
           
        </div>
       
    )
}