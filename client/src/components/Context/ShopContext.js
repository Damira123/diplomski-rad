import React, { createContext, useState, useRef, useEffect } from 'react';
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
    const url = "http://localhost:4000"
    const [token,setToken] = useState("")

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

   
    const addToCart = async (itemId) => {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      
        if(token){
            await axios.post(url + "/api/cart/add" , {itemId} , {headers:{token}})
        }    
    };
    
    const removeFromCart = async(itemId) => {
        setCartItems((prev) => {
            if (prev[itemId] > 0) { // Ne smanjuj količinu ispod nule
                return { ...prev, [itemId]: prev[itemId] - 1 };
            }
            return prev;
        });
        if(token) {
            await axios.post(url + "/api/cart/remove", {itemId} , {headers:{token}} )
        }
    };
    
    const getTotalCartAmount = () => {
        let totalAmount = 0;
    
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find((product) => product._id === item);
                if (itemInfo) {
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

    const loadCartData = async (token) => {
        const response = await axios.post("/api/cart/get" , {} , {headers:{token}})
        setCartItems(response.data.cartData)
    }

    useEffect(()=>{
        async function loadData() {
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"))
            await loadCartData(localStorage.getItem("token"))
        }
    } loadData()
     }, [])
      

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
        errMsg,
        url,
        token,
        setToken

    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}


export default ShopContextProvider 