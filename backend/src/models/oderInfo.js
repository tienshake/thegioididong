'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class OderInfo extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // OderInfo.belongsTo(models.Allcode, { foreignKey: 'positionId', targetKey: 'keyMap', as: 'positionData' });
            // OderInfo.belongsTo(models.Allcode, { foreignKey: 'gender', targetKey: 'keyMap', as: 'genderData' });
            // OderInfo.hasOne(models.Markdown, { foreignKey: 'doctorId' });
            // OderInfo.hasOne(models.Doctor_Infor, { foreignKey: 'doctorId' });

        }
    };

    OderInfo.init({
        email: DataTypes.STRING,
        name: DataTypes.STRING,
        gender: DataTypes.STRING,
        phoneNumber: DataTypes.STRING,
        provincial: DataTypes.STRING,
        district: DataTypes.STRING,
        wards: DataTypes.STRING,
        streetName: DataTypes.STRING,
        note: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'OderInfo',
    });
    return OderInfo;
};