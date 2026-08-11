import {Booking} from './booking'
import {Department} from './department'
import {Room} from './room'
import {Staff} from './staff'
import {Student} from './student'
import sequelize from '../config/dbConfig'

Booking.hasOne(Student, {foreignKey: 'student_id'});
Booking.hasOne(Staff, {foreignKey: 'staff_id'});

Student.hasOne(Department, {foreignKey: 'department_id'})
Department.hasMany(Student);

Student.hasOne(Staff)
Staff.hasOne(Student, {foreignKey: 'student_id'})
Staff.hasMany(Booking, {foreignKey: 'booking_id'});

Student.hasOne(Room, {foreignKey: 'room_id'});
Room.hasOne(Student, {foreignKey: 'student_id'})
Room.hasOne(Booking, {foreignKey: 'booking_id'})
