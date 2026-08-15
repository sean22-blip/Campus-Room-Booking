import sequelize from "../config/dbConfig";
import { DataTypes, Model, CreationOptional} from "sequelize";
export class Booking extends Model{
    declare id: CreationOptional<number>;
    declare student_id: number;
    declare staff_id: number;
    declare status: boolean;
   async viewAllBookedRoom(){
       const count = await Booking.count();
        return `Room booked: ${count}`;
    }
    viewBookingById(){
        return `${this.id}`;
    }
}

Booking.init(
    {
        student_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        staff_id:{
            type: DataTypes.INTEGER,
            allowNull: false
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
