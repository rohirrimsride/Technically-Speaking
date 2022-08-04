const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isLowercase: true,
                isUppercase: true,
                isDecimal: true,
                notEmpty: true,
                len: [8,38],
                is: {
                    args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$/,
                    msg: "Password must be 8-38 characters and include UPPERCASE, lowercase, number and special character."
                },
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
    }
);

module.exports = User;