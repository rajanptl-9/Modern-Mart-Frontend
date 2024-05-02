import axios from "axios";
import { base_url } from "../../utils/base_url";
import {config} from "../../utils/config";

const addToWishlist = async (product) => {
    const response = await axios.put(`${base_url}product/wishlist/`, product , config);
    return response;
} 

const getUserWishlist = async () => {
    const response = await axios.get(`${base_url}user/wishlist/`, config);
    return response;
}
    

const wishlistServices = {
    addToWishlist,
    getUserWishlist,
};

export default wishlistServices;