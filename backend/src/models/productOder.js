'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class productOder extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // productOder.belongsTo(models.Allcode, { foreignKey: 'positionId', targetKey: 'keyMap', as: 'positionData' });
            // productOder.belongsTo(models.Allcode, { foreignKey: 'gender', targetKey: 'keyMap', as: 'genderData' });
            // productOder.hasOne(models.Markdown, { foreignKey: 'doctorId' });
            // productOder.hasOne(models.Doctor_Infor, { foreignKey: 'doctorId' });

        }
    };
    productOder.init({
        productOderId: DataTypes.STRING,
        productId: DataTypes.STRING,
        quantity: DataTypes.STRING,
        color: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'productOder',
    });
    return productOder;
};