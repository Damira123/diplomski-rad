import React, { createContext, useState, useRef } from 'react';
import axios from 'axios';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 100; index++) { // Pretpostavljam da imaš do 100 proizvoda, prilagodi prema potrebi
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(null);
    const [errMsg, setErrMsg] = useState('');
    const errRef = useRef(null);

    const fetchProducts = async () => {
        try {
            const { data } = await axios.get("http://localhost:4000/products"); //Provjeri jel ovo link u backendu
            setProducts(data);
        } catch (error) {
            if (!error.response) {
                setErrMsg("No server response");
            }
            if (errRef.current) errRef.current.focus();
        }
    };

    const fetchProduct = async (id) => {
        try {
            const { data } = await axios.get(`http://localhost:4000/products/${id}`); // ista  stvar
            setProduct(data);
           
        } catch (error) {
            if (!error.response) {
                setErrMsg("No server response");
            } else if (error.response?.status === 404) {
                setErrMsg("Product not found");
            }
            if (errRef.current) errRef.current.focus();
        }
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItems);
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.id === Number(item));

                if (itemInfo && itemInfo.new_price) {
                    let price = parseFloat(itemInfo.new_price);

                    if (!isNaN(price)) {
                        totalAmount += price * cartItems[item];
                    } else {
                        console.warn(`Cijena za proizvod s ID-om ${item} nije valjan broj.`);
                    }
                } else {
                    console.warn(`Proizvod s ID-om ${item} nije pronađen.`);
                }
            }
        }

        return totalAmount;
    };

    const getTotalCard = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    const contextValue = {
        getTotalCartAmount,
        getTotalCard,
        products,
        product,
        cartItems,
        addToCart,
        removeFromCart,
        fetchProducts,
        fetchProduct,
        errMsg
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;