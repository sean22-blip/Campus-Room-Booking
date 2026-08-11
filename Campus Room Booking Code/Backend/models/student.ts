import sequelize from "../config/dbConfig";
import { Model, DataTypes } from "sequelize";
export class Student extends Model{
    getAllStudent(){}
    getStudentById(){}
}
Student.init({
    first_name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    last_name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    department_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    room_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },

}, {sequelize,
    modelName:'Student',
    underscored: true,
    timestamps:true
})
// export const student = sequelize.define('Student', {
//     first_name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     last_name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     department_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     room_id:{
//         type: DataTypes.INTEGER,
//         allowNull: true
//     }//to know what room the student is staying in
// },
//     {
//         underscored: true,
//         timestamps: false
//     })