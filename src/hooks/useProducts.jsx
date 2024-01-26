import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";



export const useGetProducts = (collectionName = "products") => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        const db = getFirestore();

        const productsCollection = collection(db, collectionName);

        getDocs(productsCollection).then((snapshot) => {
            setProductsData(
                snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            );
        });
    }, []);


    return { productsData };
};


