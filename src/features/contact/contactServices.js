import axios from "axios";
import { base_url } from "../../utils/base_url";

const submitEnquiry = async (data) => {
    const response = await axios.post(`${base_url}enquiry/`, data);
    return response.data;
}

const contactServices = {
    submitEnquiry,
}

export  default contactServices;