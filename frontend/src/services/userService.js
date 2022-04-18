import axios from '../axios';


const loginApi = async (email, password) => {
    return await axios.post(`/api/login`, { email, password });
}
const getAllUCodeService = async (id) => {
    return await axios.get(`/api/AllCode?id=${id}`);
}
const getAllUserService = async (id, limit, page) => {
    return await axios.get(`/api/getAllUser?id=${id}&limit=${limit}&page=${page}`);
}
const getUserByIdService = async (id) => {
    return await axios.get(`/api/getUserById?id=${id}`);
}

const createUserService = async (data) => {
    return await axios.post('/api/createUser', data);
};
const createProductService = async (data) => {
    return await axios.post('/api/create-product', data);
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
    return await axios.get(`/api/get-product-by-id?id=${id}`);
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
    getMarkDownById
}