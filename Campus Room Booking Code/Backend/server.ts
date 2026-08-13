import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import cors from 'cors'
import './models/association'
import { staffRouter } from './route/staffRoute';
const app = express();
const port = 5000;
app.use(express.json())
app.use(cors());

app.use('/api/staff/profile', staffRouter);

app.listen(port, () => {
    console.log(`server is running at port: ${port}`)
})