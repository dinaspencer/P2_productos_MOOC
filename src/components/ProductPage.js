import { useParams} from 'react-router-dom';
import ProductDetail from './ProductDetail';

export default function ProductPage() {

   let {productId} = useParams();

    return (
        <div>
            <ProductDetail 
            // products={props.products[productId]} 
            />
        </div>
    )
}
