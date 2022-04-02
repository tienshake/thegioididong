'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PostProduct extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // PostProduct.belongsTo(models.Allcode, { foreignKey: 'positionId', targetKey: 'keyMap', as: 'positionData' });
            // PostProduct.belongsTo(models.Allcode, { foreignKey: 'gender', targetKey: 'keyMap', as: 'genderData' });
            // PostProduct.hasOne(models.Markdown, { foreignKey: 'doctorId' });
            // PostProduct.hasOne(models.Doctor_Infor, { foreignKey: 'doctorId' });

        }
    };

    PostProduct.init({
        productId: DataTypes.STRING,
        post: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'PostProduct',
    });
    return PostProduct;
};