import express, { Router } from 'express';
import { getLists } from '../controllers/list.controller.js';

const router = express.Router();

router.get('', (req, res) => {
    res.send("List route hit")
});

router.get('/:id', getLists);

export default router;