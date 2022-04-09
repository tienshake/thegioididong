'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class MarkDown extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // MarkDown.belongsTo(models.Allcode, { foreignKey: 'positionId', targetKey: 'keyMap', as: 'positionData' });
            // MarkDown.belongsTo(models.Allcode, { foreignKey: 'gender', targetKey: 'keyMap', as: 'genderData' });
            // MarkDown.hasOne(models.Markdown, { foreignKey: 'doctorId' });
            // MarkDown.hasOne(models.Doctor_Infor, { foreignKey: 'doctorId' });

        }
    };

    MarkDown.init({
        productId: DataTypes.STRING,
        test: DataTypes.STRING,
        contentHTML: DataTypes.TEXT('long'),
        contentMarkdown: DataTypes.TEXT('long'),

    }, {
        sequelize,
        modelName: 'MarkDown',
    });
    return MarkDown;
};