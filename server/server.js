import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import homeRoute from './routes/homeRoute.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api/homes', homeRoute);

const PORT = process.env.PORT || 7000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mood on port ${PORT}`)
);
