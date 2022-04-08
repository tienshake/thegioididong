'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Color extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Color.belongsTo(models.Product, { foreignKey: 'productId', as: 'colorData' });


            // Color.belongsTo(models.Allcode, { foreignKey: 'positionId', targetKey: 'keyMap', as: 'positionData' });
            // Color.hasOne(models.Markdown, { foreignKey: 'doctorId' });
            // Color.hasOne(models.Doctor_Infor, { foreignKey: 'doctorId' });




        }
    };

    Color.init({
        productId: DataTypes.STRING,
        color: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Color',
    });
    return Color;
};