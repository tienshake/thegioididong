import axios from '../axios';
import Cookies from "js-cookie";
const profileCookie = Cookies.get("profile");
let tokens = {}
if (profileCookie) {
    tokens = JSON.parse(profileCookie)
}
console.log(tokens)
const loginApi = async (email, password) => {
    return await axios.post(`/api/login`, { email, password });
}
const getAllUCodeService = async (id) => {
    return await axios.get(`/api/AllCode?id=${id}`);
}

const getAllUserService = async (id, limit, page) => {
    return await axios.get(`/api/getAllUser?id=${id}&limit=${limit}&page=${page}`, {
        headers: {
            token: `Bearer ${tokens.token}`
        }
    });
}
const getUserByIdService = async (id) => {
    return await axios.get(`/api/getUserById?id=${id}`, {
        headers: {
            token: `Bearer ${tokens.token}`
        }
    });
}

const createUserService = async (data) => {
    return await axios.post('/api/createUser', data, {
        headers: {
            token: `Bearer ${tokens.token}`
        }
    });
};

const createProductService = async (data) => {
    return await axios.post('/api/create-product', data,{
        headers: {
            token: `Bearer ${tokens.token}`
        }
    });
};
const createColorProductService = async (data) => {
    return await axios.post('/api/create-color-product', data);
};
const createImgDetailProductService = async (data) => {
    return await axios.post('/api/create-imgDetail-product', data);
};
const getAllProductService = async (limit, page) => {
    return await axios.get(`/api/get-all-product?limit=${limit}&page=${page}`);
}
const getAllProductHomeService = async (limit, option) => {
    return await axios.get(`/api/get-all-product-home?limit=${limit}&option=${option}`);
}
const getProductByIdService = async (id) => {
    return await axios.get(`/api/get-product-by-id?id=${id}`,{
        headers: {
            token: `Bearer ${tokens.token}`
        }
    });
}
const getAllProductSelected = async (id) => {
    return await axios.get(`/api/get-all-product-only-name-and-id`);
}
const createMarkDown = async (data) => {
    return await axios.post('/api/post-markdown', data);
};
const getMarkDownById = async (id) => {
    return await axios.get(`/api/get-markDown-by-id?id=${id}`);
}
const createOder = async (dataOder, dataOderProduct) => {
    return await axios.post('/api/createOder', { dataOder, dataOderProduct });
};

const deleteUserById  = async (id) => {
    return await axios.delete(`/api/deleteUserById?id=${id}`, {
        headers: {
            token: `Bearer ${tokens.token}`
        }
    });
};
const deleteProductById = async (id) => {
    return await axios.delete(`/api/delete-product?id=${id}`, {
        headers: {
            token: `Bearer ${tokens.token}`
        }
    });
    
}
export {
    loginApi,
    createUserService,
    getAllUserService,
    getUserByIdService,
    getAllUCodeService,
    createProductService,
    createColorProductService,
    createImgDetailProductService,
    getAllProductService,
    getAllProductHomeService,
    getProductByIdService,
    getAllProductSelected,
    createMarkDown,
    getMarkDownById,
    createOder,
    deleteUserById,
    deleteProductById
}