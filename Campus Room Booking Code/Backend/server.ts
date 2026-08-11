import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import sequelize from './config/dbConfig';
dotenv.config();
const app = express();
const port = 5000;
app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
    try {
        sequelize.authenticate();
        sequelize.sync({alter: true})
        console.log(`successfully connected to backend`);
    } catch (error) {
        console.log("Error at the backend server:", error);
        res.json(error);
    }
});

app.listen(port, () => {
    console.log(`server is running at port: ${port}`)
})