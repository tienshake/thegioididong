'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Cart extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // Cart.belongsTo(models.Allcode, { foreignKey: 'positionId', targetKey: 'keyMap', as: 'positionData' });
            // Cart.belongsTo(models.Allcode, { foreignKey: 'gender', targetKey: 'keyMap', as: 'genderData' });
            // Cart.hasOne(models.Markdown, { foreignKey: 'doctorId' });
            // Cart.hasOne(models.Doctor_Infor, { foreignKey: 'doctorId' });

        }
    };

    Cart.init({
        userId: DataTypes.STRING,
        productId: DataTypes.STRING,
        state: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Cart',
    });
    return Cart;
};