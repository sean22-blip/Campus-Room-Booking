import { DataTypes, Model } from "sequelize";
import sequelize from "../config/dbConfig";
export class Department extends Model{
    getAllDepartment(){}
    getDepartmentById(){}
}
Department.init({
    description:{
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize, modelName: "Department",
    underscored: true,
    timestamps: false
})