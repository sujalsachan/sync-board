
import express from 'express';
import mongoose from 'mongoose';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.routes.js';

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.send({
        name : "Sujal",
        id: "1"
    });
})

app.listen(PORT, () => {
    console.log("Server running on PORT ", PORT);
})
