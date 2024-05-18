import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/config";

const getProducts = async (filter) => {
    const response = await axios.get(`${base_url}product?${filter?.category?`category=${filter?.category}`: ""}${filter?.brand?`&brand=${filter?.brand}`:""}${filter?.priceRange?.min?`&price[gte]=${filter?.priceRange?.min}` : ""}${filter?.priceRange?.max?`&price[lte]=${filter?.priceRange?.max}` : ""}${filter?.sort?`&sort=${filter?.sort}` : ""}${filter?.page?`&page=${filter?.page}` : ""}`);
    return response;
};

const getSpecificProducts = async (filter) => {
    const response = await axios.get(`${base_url}product/specific-products?${filter?.tag?`tag=${filter?.tag}`: ""}${filter?.limit?`&&limit=${filter?.limit}`: ""}`);
    return response;
};

const getOneProduct = async (id) => {
    const response = await axios.get(`${base_url}product/${id}`);
    return response;
};

const addToCart = async (prodData) => {
    const response = await axios.post(`${base_url}user/cart/`, prodData, config);
    return response;
}

const getCart = async () => {
    const response = await axios.get(`${base_url}user/get-cart/`, config);
    return response;
}

const submitReview = async (data) => {
    const response = await axios.put(`${base_url}product/rating/`, data);
    return response;

}

const productServices = {
    getProducts,
    getSpecificProducts,
    getOneProduct,
    addToCart,
    getCart,
    submitReview,
};

export default productServices;