import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/config";

const addToCart = async (prodData) => {
    const response = await axios.post(`${base_url}user/cart/`, prodData, config);
    return response;
}

const getCart = async () => {
    const response = await axios.get(`${base_url}user/get-cart/`, config);
    return response;
}

const removeProduct = async (prodId) => {
    const response = await axios.delete(`${base_url}user/cart/${prodId}/`, config);
    return response;
}

const updateCart = async (prodData) => {
    const response = await axios.put(`${base_url}user/cart/`, prodData, config);
    return response;
}

const clearCart = async () => {
    const response = await axios.delete(`${base_url}user/clear-cart`, config);
    return response;

}

const cartServices = {
    addToCart,
    getCart,
    removeProduct,
    updateCart,
    clearCart,  
};

export default cartServices;