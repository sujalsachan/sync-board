import express from 'express'
import { login, signUp } from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/login', login)
router.get('/signup', signUp)

export default router;