import sequelize from "../config/dbConfig";
import { DataTypes, Model } from "sequelize";
export class Booking extends Model{
    viewAllBooking(){}
    viewBookingById(){}
}

Booking.init(
    {
        student_id:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        staff_id:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        status:{
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
    }, {
        sequelize,
        modelName:'Booking',
        timestamps: true,
        underscored: true
    }
)
