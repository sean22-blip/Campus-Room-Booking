import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import sequelize from './config/dbConfig';
dotenv.config();
const app = express();
const port = 5000;
app.use(express.json())
app.use(cors());



app.listen(port, () => {
    console.log(`server is running at port: ${port}`)
})