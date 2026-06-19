import express from 'express';
import { addBoard } from '../controllers/board.controller.js';

const router = express.Router();

router.post('/add-board', addBoard);

export default router;