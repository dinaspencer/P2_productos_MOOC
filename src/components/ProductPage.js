import { useLoaderData, json } from 'react-router-dom';
import ProductDetail from './ProductDetail';

export default function ProductPage() {

   const getProductData = useLoaderData();

    return (
        <div>
            <ProductDetail products={getProductData} />
        </div>
    )
}

export async function loader ({params}) {
    const id = params.productId;
    const response = await fetch("https://dummyjson.com/products/");
    const data = await response.json();
    const productData = data.products;
    const res = new Response(JSON.stringify(productData), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
    });
    console.log('res: ', res);
 
    return res;    
}