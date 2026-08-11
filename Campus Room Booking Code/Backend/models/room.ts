import sequelize from "../config/dbConfig";
import { Model, DataTypes } from "sequelize";
export class Room extends Model{
    getAllRoom(){

    }
    getAvailableRoom(){

    }
    getBookedRoom(){

    }
}
Room.init({
    floor_number:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    booking_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize, modelName: 'Room',
    underscored: true,
    timestamps: false
})