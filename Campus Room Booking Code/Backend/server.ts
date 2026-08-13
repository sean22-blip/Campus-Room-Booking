import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'
import sequelize from './config/dbConfig';
import './models/association'
import { staffRouter } from './route/staffRoute';
const app = express();
const port = 5000;
app.use(express.json())
app.use(cors());

app.use('/api/staff/profile', staffRouter);
const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log("successfully connected to database")
        app.listen(port, () => {
            console.log(`server is running at port: ${port}`)
        })
    } catch (error) {
        console.log({error: 'error in the server backend'}, error)
    }
}
startServer();