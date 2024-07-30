import React, {createContext} from 'react'
import allproduct from '../../allproduts';

export const ShopContex = createContext (null) ;

const ShopContexProvider = (props) => {
    const contextValue = {allproduct }

    return (
        <ShopContex.Provider value={contextValue} >
            {props.children}
        </ShopContex.Provider>
    )

}
export default ShopContexProvider