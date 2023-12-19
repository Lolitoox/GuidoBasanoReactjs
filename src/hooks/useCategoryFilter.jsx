import { useEffect, useState } from "react";
import { getProductsByCategory } from "../services";



export const useGetProductsByCategory = (id) => {
    const [productsData, setProductsData] = useState([]);


    useEffect(() => {
        getProductsByCategory(id)
            .then((response) => {
                setProductsData(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return { productsData }
}