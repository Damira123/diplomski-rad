import React, { useContext } from 'react'
import { ShopContext } from '../components/Context/ShopContext'
import { useParams } from 'react-router-dom';
import Bread from '../components/Bread.js/Bread';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import ReletedProducts from '../components/ReletedProduts/ReletedProducts';

function Product() {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams() ;
    const product = all_product.find((e) => e.id === Number(productId))
    
  return (
    <div>
        <Bread product={product}/>
        <ProductDisplay product={product}/>
        <DescriptionBox/>
        <ReletedProducts/>
    </div>
  )
}

export default Product