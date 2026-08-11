import sequelize from "../config/dbConfig";
import { Model, DataTypes } from "sequelize";
export class Staff extends Model{
    viewAllStaff(){}
    editStaffFirst_Name(){}
    editStaffLast_Name(){}
}
Staff.init({
    first_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    booking_id:{
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize, modelName: "Staff",
    underscored: true,
    timestamps: false
})