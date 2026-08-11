import { Booking } from './booking'
import { Department } from './department'
import { Room } from './room'
import { Staff } from './staff'
import { Student } from './student'

// ------------------------------------------------------------
// Booking <-> Student (Booking is FOR a Student, Student has ONE Booking)
// ------------------------------------------------------------
Booking.belongsTo(Student, { foreignKey: 'student_id' });
Student.hasOne(Booking, { foreignKey: 'student_id' });

// ------------------------------------------------------------
// Booking <-> Staff (Staff CREATES Booking, Staff has MANY Bookings)
// ------------------------------------------------------------
Booking.belongsTo(Staff, { foreignKey: 'staff_id' });
Staff.hasMany(Booking, { foreignKey: 'staff_id' });

// ------------------------------------------------------------
// Student <-> Staff (Student belongs to ONE Staff supervisor, Staff has MANY Students)
// ------------------------------------------------------------
Student.belongsTo(Staff, { foreignKey: 'staff_id' });
Staff.hasMany(Student, { foreignKey: 'staff_id' });

// ------------------------------------------------------------
// Student <-> Department (Student belongs to ONE Department, Dept has MANY Students)
// ------------------------------------------------------------
Student.belongsTo(Department, { foreignKey: 'department_id' });
Department.hasMany(Student, { foreignKey: 'department_id' });

// ------------------------------------------------------------
// Student <-> Room (Student lives in ONE Room, Room has ONE Student)
// ------------------------------------------------------------
Student.belongsTo(Room, { foreignKey: 'room_id' });
Room.hasOne(Student, { foreignKey: 'room_id' });

// ------------------------------------------------------------
// Room <-> Booking (Room is assigned via ONE Booking, Booking has ONE Room)
// ------------------------------------------------------------
Room.belongsTo(Booking, { foreignKey: 'booking_id' });
Booking.hasOne(Room, { foreignKey: 'booking_id' });