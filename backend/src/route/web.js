import express from 'express';
import userController from '../controllers/userController';
import productController from '../controllers/productController';
import middleWareController from '../controllers/middleWareController';
const router = express.Router();

const initWebRoutes = (app) => {
    //All code API============================================================
    router.get("/api/AllCode", userController.handleAllCode);
    router.post("/api/create-item-allCode", userController.handleCreateItemAllCode);
    //User API================================================================
    router.post("/api/login", userController.handleLogin);
    router.post("/api/logout", middleWareController.verifyToken, userController.handleLogout);
    router.post("/api/refresh-token", userController.handleRefreshToken);
    router.post("/api/createUser", middleWareController.verifyToken, userController.createUserController);
    router.get("/api/getAllUser", middleWareController.verifyToken, userController.handleGetAllUseController);
    router.get("/api/getUserById",  middleWareController.verifyToken,userController.handleGetUserById);
    router.delete("/api/deleteUserById", middleWareController.verifyToken,userController.handleDeleteUserById);
    //Product API======================================================
    router.post("/api/create-product", middleWareController.verifyToken, productController.handleCreateProduct);
    router.get("/api/get-product-by-id", middleWareController.verifyToken, productController.handleGetProductById);
    router.get("/api/get-all-product", middleWareController.verifyToken, productController.handleGetAllProduct);
    router.get("/api/get-all-product-home", productController.handleGetAllProductHome);
    router.post("/api/createOder", productController.createOder);

    router.post("/api/create-color-product", productController.handleCreateColorProduct);
    router.post("/api/create-imgDetail-product", productController.handleCreateImgDetailProduct);
    router.get("/api/get-all-product-only-name-and-id", productController.handleAllProductOnlyNameAndId);
    router.post("/api/post-markdown", productController.handlePostMarkDown);
    router.get("/api/get-markDown-by-id", productController.handleMarkDownById);

    router.delete("/api/delete-all-product", productController.handleDeleteProduct);
    router.post("/api/buy-with-state-product", productController.handleBuyWithStateProduct);
    router.post("/api/update-product-cart", productController.handleUpdateProductCart);
    router.delete("/api/delete-product", productController.handleDeleteProductById);
    //API======================================================
    return app.use("/", router);

}

export default initWebRoutes;