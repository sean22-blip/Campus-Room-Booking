import { DataTypes } from "sequelize";
import sequelize from "../config/dbConfig";


export const department = sequelize.define('department', {
    description:{
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    underscored: true,
    timestamps: false,
}
)
