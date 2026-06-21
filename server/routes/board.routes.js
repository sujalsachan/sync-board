import express from 'express';
import { addBoard, getAllBoards } from '../controllers/board.controller.js';

const router = express.Router();

router.post('/add-board', addBoard);
router.get('/all-boards/:id', getAllBoards);

export default router;