
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import connectDB from './config/database.js';
import employeeRoute from "./route/employeeRoute.js"
const app = express();
const PORT = 8080;

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};
app.use(cors(corsOptions));

connectDB();



app.use('/api/submit',employeeRoute)

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
