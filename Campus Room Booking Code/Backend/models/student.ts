import sequelize from "../config/dbConfig";
import { DataType, DataTypes } from "sequelize";
export const student = sequelize.define('Student', {
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    department_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    room_id:{
        type: DataTypes.INTEGER,
        allowNull: true
    }//to know what room the student is staying in
},
    {
        underscored: true,
        timestamps: false
    })