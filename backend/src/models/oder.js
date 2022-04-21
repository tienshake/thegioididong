'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Oder extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // Oder.belongsTo(models.Allcode, { foreignKey: 'positionId', targetKey: 'keyMap', as: 'positionData' });
            // Oder.belongsTo(models.Allcode, { foreignKey: 'gender', targetKey: 'keyMap', as: 'genderData' });
            // Oder.hasOne(models.Markdown, { foreignKey: 'doctorId' });
            // Oder.hasOne(models.Doctor_Infor, { foreignKey: 'doctorId' });

        }
    };
    Oder.init({
        productId: DataTypes.STRING,
        quantity: DataTypes.STRING,
        oderInfoId: DataTypes.STRING,
        state: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Oder',
    });
    return Oder;
};