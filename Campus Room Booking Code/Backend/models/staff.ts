import sequelize from "../config/dbConfig";
import { DataType, DataTypes } from "sequelize";

export const staff = sequelize.define('Staff', {
    first_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    booking_id:{
        type:DataTypes.INTEGER,
        allowNull: true
    }
}, {
    underscored: true,
    timestamps:false
})