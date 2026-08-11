import sequelize from "../config/dbConfig";
import { DataTypes } from "sequelize";
export const booking = sequelize.define('Booking', {
    student_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    staff_id:{
        type:DataTypes.INTEGER,
        allowNull: true
    },
    status:{
        type:DataTypes.BOOLEAN,
        allowNull: true
    }
}, {
    underscored: true,
    timestamps: true
})