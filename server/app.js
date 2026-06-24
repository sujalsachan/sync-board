
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import boardRoutes from './routes/board.routes.js';
import listRoutes from './routes/list.routes.js';


const app = express();
const PORT = 3000;

connectDB();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/board', boardRoutes)
app.use('/list', listRoutes);

app.get('/', (req, res) => {
    res.send({
        name : "Sujal",
        id: "1"
    });
})

app.listen(PORT, () => {
    console.log("Server running on PORT ", PORT);
})
