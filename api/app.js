import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import blogRoute from './routes/blogRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.db)
    .then((response) => {
        console.log('Database connected');
        app.listen(process.env.port, () => {
            console.log(`Server is listening on port ${process.env.port}`);
        })
    }).catch((error) => {
        console.log(error);
    });

app.use('/api/blogs', blogRoute);