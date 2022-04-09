import express from 'express';
import userController from '../controllers/userController';
import productController from '../controllers/productController';
const router = express.Router();

const initWebRoutes = (app) => {
    //All code API============================================================
    router.get("/api/AllCode", userController.handleAllCode);
    //User API================================================================
    router.post("/api/createUser", userController.createUserController);
    router.get("/api/getAllUser", userController.handleGetAllUseController);
    router.post("/api/login", userController.handleLogin);
    //Product API======================================================
    router.post("/api/create-product", productController.handleCreateProduct);
    router.get("/api/get-product-by-id", productController.handleGetProductById);
    router.get("/api/get-all-product", productController.handleGetAllProduct);
    router.get("/api/get-all-product-home", productController.handleGetAllProductHome);

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









    // router.get("/api/getAllUser", userController.handleGetAllUser);
    // router.post("/api/create-user", userController.handleCreateUser);
    // router.put("/api/edit-user", userController.handleEditUser);
    // router.delete("/api/delete-user", userController.handleDeleteUser);
    // router.get("/api/AllCode", userController.handleAllCode);

    // router.get("/api/top-doctor-home", doctorController.getDoctorHome);
    // router.get("/api/get-all-doctor", doctorController.getAllDoctor);
    // router.post("/api/save-info-doctor", doctorController.postSaveInfoDoctor);
    // router.get("/api/get-detail-doctor-by-id", doctorController.getDetailDoctorById);
    // router.post("/api/bulk-create-schedule", doctorController.bulkCreateSchedule);
    // router.get("/api/get-schedule-doctor-by-date", doctorController.getScheduleDoctorByDate);
    // router.get("/api/get-extra-info-doctor-by-id", doctorController.getExtraInfoDoctorById);


    return app.use("/", router);
}

export default initWebRoutes;