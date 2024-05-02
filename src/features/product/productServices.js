import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/config";

const getProducts = async () => {
    const response = await axios.get(`${base_url}product/`);
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

const productServices = {
    getProducts,
    getOneProduct,
    addToCart,
    getCart,
};

export default productServices;