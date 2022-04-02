'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class DetailPhotos extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // DetailPhotos.belongsTo(models.Allcode, { foreignKey: 'positionId', targetKey: 'keyMap', as: 'positionData' });
            // DetailPhotos.belongsTo(models.Allcode, { foreignKey: 'gender', targetKey: 'keyMap', as: 'genderData' });
            // DetailPhotos.hasOne(models.Markdown, { foreignKey: 'doctorId' });
            // DetailPhotos.hasOne(models.Doctor_Infor, { foreignKey: 'doctorId' });

        }
    };

    DetailPhotos.init({
        productId: DataTypes.STRING,
        image: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'DetailPhotos',
    });
    return DetailPhotos;
};