import { createContext, useContext, useEffect, useState } from "react";
import { getAllProducts } from "../services/productService";

const ProductContext = createContext();

function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const data = await getAllProducts();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider
            value={{
                products,
                loading,
                error,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

function useProducts() {
    return useContext(ProductContext);
}

export { ProductProvider, useProducts };