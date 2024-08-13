import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../components/Context/ShopContext'
import { useParams } from 'react-router-dom';
import Bread from '../components/Bread.js/Bread';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import ReletedProducts from '../components/ReletedProduts/ReletedProducts';




function Product() {
    
    const {product ,fetchProduct} = useContext(ShopContext);
    const {productId} = useParams()
    useEffect(()=> {
      if(productId) {
        fetchProduct(productId)
      }
    }, [productId , fetchProduct]);


 
  return (
    <div>
        <Bread product={product} />

        <div>
            {product ? (
                <ProductDisplay product={product} />
            ) : (
                <div>Loading...</div>
            )}
        </div>
        <DescriptionBox/>
        <ReletedProducts />
    </div>
  )
}

export default Product