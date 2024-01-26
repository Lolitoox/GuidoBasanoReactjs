import { useEffect, useState } from "react";
import { collection, getDoc, doc, getDocs, getFirestore } from "firebase/firestore";



export const useGetProductById = (collectionName = "products", id) => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const db = getFirestore();

        const docRef = doc(db, collectionName, id)

        getDoc(docRef).then((doc) => {
            setProductData({ id: doc.id, ...doc.data() })
        })

    }, [id]);

    return { productData };
};