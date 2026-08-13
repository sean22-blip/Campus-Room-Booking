import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'
import sequelize from './config/dbConfig';
import './models/association'
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
            console.log(`server is running at port: ${port}`),
            console.log('Swagger docs at http://localhost:3000/api-docs');
        })
    } catch (error) {
        console.log({ error: 'error in the server backend' }, error)
    }
}
startServer();