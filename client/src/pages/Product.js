import React, { useContext, useEffect, product } from 'react'
import { ShopContext } from '../components/Context/ShopContext'
import { useParams } from 'react-router-dom';
import Bread from '../components/Bread.js/Bread';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import ReletedProducts from '../components/ReletedProduts/ReletedProducts';

function Product() {
    const {products , fetchProduct} = useContext(ShopContext);
    const {productId} = useParams() ;
    useEffect(()=>{
      fetchProduct(productId) //Dohvati proizvod kada se komponenta učitava
    }, [productId,fetchProduct])
    
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