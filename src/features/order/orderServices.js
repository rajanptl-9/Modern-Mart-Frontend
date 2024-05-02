import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/config";

const createOrder = async (order) => {
    const response = await axios.post(`${base_url}user/cart/make-order`, order, config);
    return response;
};

const getMyOrders = async () => {
    const response = await axios.get(`${base_url}user/get-my-orders`, config);
    return response;
}

const orderServices = {
    createOrder,
    getMyOrders,
}

export default orderServices;