import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'
import sequelize from './config/dbConfig';
import './models'
import { staffRouter } from './route/staffRoute';
import { serveSwagger, setupSwagger } from './config/swagger';
const app = express();
const port = 5000;
app.use(express.json())
app.use(cors());

app.use('/api/staff/profile', staffRouter);
app.use('/api-docs', serveSwagger, setupSwagger);

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log("successfully connected to database")
        app.listen(port, () => {
            console.log(`server is running at port: http://localhost:${port}`),
            console.log(`Swagger docs at http://localhost:${port}/api-docs`);
        })
    } catch (error) {
        console.log({ error: 'error in the server backend' }, error)
    }
}
startServer();