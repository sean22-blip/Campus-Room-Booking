import sequelize from "../config/dbConfig";
import { DataType, DataTypes } from "sequelize";

export const room = sequelize.define('Room', {
    floor_number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    booking_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    underscored: true,
    timestamps:false
}
)