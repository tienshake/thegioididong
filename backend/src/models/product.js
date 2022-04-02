'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Product.belongsTo(models.Allcode, { foreignKey: 'type', targetKey: 'keyMap', as: 'typeData' });
            Product.belongsTo(models.Allcode, { foreignKey: 'manufacturer', targetKey: 'keyMap', as: 'manufacturerData' });
            Product.belongsTo(models.Allcode, { foreignKey: 'pin', targetKey: 'keyMap', as: 'pinData' });
            Product.belongsTo(models.Allcode, { foreignKey: 'camera', targetKey: 'keyMap', as: 'cameraData' });
            Product.belongsTo(models.Allcode, { foreignKey: 'display', targetKey: 'keyMap', as: 'displayData' });

            // Product.belongsTo(models.Allcode, { foreignKey: 'positionId', targetKey: 'keyMap', as: 'positionData' });
            // Product.belongsTo(models.Allcode, { foreignKey: 'gender', targetKey: 'keyMap', as: 'genderData' });
            // Product.hasOne(models.Markdown, { foreignKey: 'doctorId' });
            // Product.hasOne(models.Doctor_Infor, { foreignKey: 'doctorId' });

        }
    };

    Product.init({
        nameItem: DataTypes.STRING,
        quantity: DataTypes.STRING,
        price: DataTypes.STRING,
        image: DataTypes.STRING,
        type: DataTypes.STRING,
        manufacturer: DataTypes.STRING,
        ram: DataTypes.STRING,
        rom: DataTypes.STRING,
        pin: DataTypes.STRING,
        display: DataTypes.STRING,
        camera: DataTypes.STRING,
        vote: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};