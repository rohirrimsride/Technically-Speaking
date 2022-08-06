const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const saltRounds = 12;
let password = 'garBageCan39*';

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
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
                isEmail: true,
                msg: 'Must be a valid Email address.'
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
                len: [12,40],
                is: {
                    args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$/,
                    msg: "Password must be 12-40 characters and include UPPERCASE, lowercase, number and special character."
                },
            }
        }
    },
    {
        // hooks: {
        //     async beforeCreate(userInfo) {
        //         userInfo.password = await bcrypt.hash(userInfo.password, )
        //     }
        // },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;