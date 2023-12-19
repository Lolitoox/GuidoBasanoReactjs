import axios from "axios";

export async function getProducts(limit = 15) {
    return await axios.get(`https://fakestoreapi.com/products?limit=${limit}`)

}
export async function getProductById(id) {
    return await axios.get(`https://fakestoreapi.com/products/${id}`)
}

export async function getCategories() {
    return await axios.get(`https://fakestoreapi.com/products/categories`)
}

export async function getProductsByCategory(id) {
    return await axios.get(`https://fakestoreapi.com/products/category/${id}`)

}
