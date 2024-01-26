import { useEffect, useState } from "react";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

export const useGetProductsByCategory = (categoryId) => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const db = getFirestore();
                const productsCollection = collection(db, "products");

                const q = query(productsCollection, where("category", "==", categoryId));

                const productsSnapshot = await getDocs(q);

                const productsData = productsSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setProductsData(productsData);
            } catch (error) {
                console.error("Error al obtener productos por categoría:", error);
            }
        };

        fetchProducts();
    }, [categoryId]);

    return { productsData };
};

