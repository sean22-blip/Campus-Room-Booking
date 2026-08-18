import dotenv from 'dotenv'
dotenv.config();
module.exports = {
  development: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "campus_room_booking_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "campus_room_booking_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
};