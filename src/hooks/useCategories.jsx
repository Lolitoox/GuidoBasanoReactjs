import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export const useGetCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const db = getFirestore();
                const categoriesCollection = collection(db, "products");

                const categoriesSnapshot = await getDocs(categoriesCollection);

                const categoriesData = categoriesSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setCategories(categoriesData);
            } catch (error) {
                console.error("Error al obtener las categorías:", error);
            }
        };

        fetchCategories();
    }, []);

    return { categories };
};
