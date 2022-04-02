import db from '../models/index';
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);



const handleCreateProductService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {

            if (!data.nameItem || !data.quantity ||
                !data.price || !data.image || !data.type) {
                resolve({
                    erCode: 1,
                    message: 'Missing parameter!'
                })
            } else {
                if (!data.id) {
                    let sendData = {
                        nameItem: data.nameItem,
                        quantity: data.quantity,
                        price: data.price,
                        image: data.image,
                        type: data.type,
                        manufacturer: data.manufacturer,
                        ram: data.ram,
                        rom: data.rom,
                        pin: data.pin,
                        display: data.display,
                        camera: data.camera,
                    }
                    if (data.type === 'PL2') {
                        delete sendData.ram
                        delete sendData.rom
                        delete sendData.pin
                        delete sendData.display
                        delete sendData.camera
                    }
                    const test = await db.Product.create(sendData);
                    resolve({
                        errCode: 0,
                        message: `Create product success`,
                        test: test.id
                    });



                } else {
                    let product = await db.Product.findOne({
                        where: { id: data.id },
                        raw: false
                    })
                    product.nameItem = data.nameItem;
                    product.image = data.image;
                    product.state = data.state;
                    await product.save();
                    resolve({
                        errCode: 2,
                        message: `Update product success`
                    });
                }




                // let product = await db.Product.findOne({
                //     where: { id: data.id },
                //     raw: false
                // })
                // if (!product) {

                // } else {
                //     product.nameItem = data.nameItem;
                //     product.image = data.image;
                //     product.state = data.state;
                //     await product.save();
                //     resolve({
                //         errCode: 2,
                //         message: `Update product success`
                //     });
                // }

            }
        } catch (e) {
            reject(e)
        }
    })
}

const handleGetProductByOwnerService = (keyId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let product = '';
            if (!keyId) {
                resolve({
                    erCode: 1,
                    message: 'Missing parameter!'
                })
            } else {
                product = await db.Product.findAll({
                    where: { keyId: keyId }
                })

            }
            if (product && product.image) {
                product.image = new Buffer(product.image, 'base64').toString('binary');
            }
            product.errCode = 0;
            resolve(product)
        } catch (e) {
            reject(e)
        }
    })


};
const handleGetAllProductService = (limit, page) => {
    return new Promise(async (resolve, reject) => {
        try {
            let offset = (page - 1) * limit
            let products = '';
            let countData = '';

            const { count, rows: productData } = await db.Product.findAndCountAll({
                offset: offset,
                limit: limit,
                order: [['updatedAt', 'DESC']],
                include: [
                    { model: db.Allcode, as: 'typeData', attributes: ['valueVi', 'valueEn'] },
                    { model: db.Allcode, as: 'manufacturerData', attributes: ['valueVi', 'valueEn'] },
                    { model: db.Allcode, as: 'pinData', attributes: ['valueVi', 'valueEn'] },
                    { model: db.Allcode, as: 'cameraData', attributes: ['valueVi', 'valueEn'] },
                    { model: db.Allcode, as: 'displayData', attributes: ['valueVi', 'valueEn'] },

                ],
                raw: true,
                nest: true
            })
            products = productData;
            countData = count;
            if (products && products.length > 0) {
                products.map((item) => {
                    item.image = new Buffer(item.image, 'base64').toString('binary');
                    return item
                })

            }
            resolve({ products, countData })

        } catch (e) {
            reject(e)
        }
    })

};

const handleGetAllProductHome = (limit, option) => {
    return new Promise(async (resolve, reject) => {
        try {
            let products = ''
            let countData = ''
            const { count, rows: productData } = await db.Product.findAndCountAll({
                where: { type: option },
                limit: limit,
                order: [['updatedAt', 'DESC']],
                include: [
                    { model: db.Allcode, as: 'manufacturerData', attributes: ['valueVi', 'valueEn'] },
                ],
                attributes: {
                    exclude: ['manufacturer', 'type', 'quantity']
                },
                raw: true,
                nest: true
            })
            products = productData;
            countData = count;
            if (products && products.length > 0) {
                products.map((item) => {
                    item.image = new Buffer(item.image, 'base64').toString('binary');
                    // delete item.image
                    return item
                })

            }
            resolve({ products, countData })

        } catch (e) {
            reject(e)
        }
    })

};

const handleDeleteAllProductService = (count) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (+count === 0) {

                if (product.length !== 0) {
                    const res = db.Product.destroy({
                        where: {},
                        truncate: true
                    })
                    if (res) {
                        resolve({
                            error: 0,
                            errorMessage: 'delete all products oke'
                        })
                    }
                } else {
                    resolve({
                        error: 2,
                        errorMessage: 'Call success'
                    })
                }

            } else {
                resolve({
                    error: 1,
                    errorMessage: 'Not done'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
};
const handleBuyWithStateProductService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.itemState || !data.addressItem || !data.buyer) {
                resolve({
                    erCode: 2,
                    message: 'Missing parameter!'
                })
            } else {
                let product = await db.Product.findOne({
                    where: { addressItem: data.addressItem },
                    raw: false
                });
                if (product) {
                    if (+product.state === 0) {
                        product.cart = data.keyId;
                    }
                    product.state = data.itemState;
                    product.buyer = data.buyer;
                    await product.save();
                    resolve({
                        errCode: 0,
                        message: `buy product success`
                    });
                } else {
                    resolve({
                        erCode: 3,
                        message: 'Buy with state product error!'
                    })
                }

            }
        } catch (e) {
            reject(e);
        }
    })

};
const handleUpdateProductCartService = (keyId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!keyId) {
                resolve({
                    erCode: 2,
                    message: 'Missing parameter!'
                })
            } else {
                let product = await db.Product.findAll({
                    where: { cart: keyId },
                    raw: false
                });
                product.map(item => {
                    if (item && item.image) {
                        item.image = new Buffer(item.image, 'base64').toString('binary');
                    }
                    return item
                })
                resolve({
                    errCode: 0,
                    message: 'Oke',
                    data: product
                })

            }
        } catch (e) {
            reject(e);
        }
    })
}
const handleDeleteProductByIdService = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const product = await db.Product.findOne({ where: { id: id } });
            if (!product) {
                resolve({
                    errCode: 2,
                    message: `The product isn't exist`
                })
            }
            if (product) {
                product.state = 0;
            }
            resolve({
                errCode: 0,
                message: `The product is delete`
            })
        } catch (e) {
            reject(e)
        }
    })
};
const handleCreateColorProduct = (data) => {
    return new Promise(async (resolve, reject) => {
        try {

            if (!data) {
                resolve({
                    errCode: 2,
                    message: `Missing required parameter!`
                })
            } else {
                await db.Color.bulkCreate(data);
                resolve({
                    errCode: 0,
                    message: `The color is create`
                })
            }

        } catch (e) {
            reject(e)
        }
    })
};
const handleCreateImgDetailProduct = (data) => {
    return new Promise(async (resolve, reject) => {
        try {

            if (!data) {
                resolve({
                    errCode: 2,
                    message: `Missing required parameter!`
                })
            } else {
                await db.DetailPhotos.bulkCreate(data);
                resolve({
                    errCode: 0,
                    message: `The color is create`
                })
            }

        } catch (e) {
            reject(e)
        }
    })
};

module.exports = {
    handleCreateProductService,
    handleGetProductByOwnerService,
    handleGetAllProductService,
    handleDeleteAllProductService,
    handleBuyWithStateProductService,
    handleUpdateProductCartService,
    handleDeleteProductByIdService,
    handleCreateColorProduct,
    handleCreateImgDetailProduct,
    handleGetAllProductHome
}
