import axios from '../axios';


const getAllUCodeService = async (id) => {
    return await axios.get(`/api/AllCode?id=${id}`);
}
const getAllUserService = async (id, limit, page) => {
    return await axios.get(`/api/getAllUser?id=${id}&limit=${limit}&page=${page}`);
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
export {
    createUserService,
    getAllUserService,
    getAllUCodeService,
    createProductService,
    createColorProductService,
    createImgDetailProductService
}