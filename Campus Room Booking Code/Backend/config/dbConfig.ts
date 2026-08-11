import dotenv from 'dotenv'
import {Sequelize} from 'sequelize'
import mysql2 from 'mysql2';

dotenv.config();
const sequelize = new Sequelize(
    process.env.DB_NAME!,
    process.env.DB_USER!,
    process.env.DB_PASSWORD!,
    {
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT || '3306', 10),
        dialect: 'mysql',
        dialectModule: mysql2,
    }
)
console.log("DB NAME", process.env.DB_NAME)
console.log("DB USER", process.env.DB_USER)
console.log("DB HOST", process.env.DB_HOST)

export default sequelize;