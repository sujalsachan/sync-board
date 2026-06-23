import express from 'express';
import { addBoard, addList, getAllBoards } from '../controllers/board.controller.js';

const router = express.Router();

router.post('/add-board', addBoard);
router.get('/all-boards/:id', getAllBoards);
router.post('/addList', addList);

export default router;