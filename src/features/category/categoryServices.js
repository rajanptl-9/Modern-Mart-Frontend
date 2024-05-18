import axios from "axios";
import { base_url } from "../../utils/base_url";

const getCategories = async () => {
    const response = await axios.get(`${base_url}category/`);
    return response;
};

const categoryServices = {
    getCategories,
};

export default categoryServices;