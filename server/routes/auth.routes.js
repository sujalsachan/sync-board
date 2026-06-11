    import express from 'express'
    import { login, signUp } from '../controllers/auth.controller.js';

    const router = express.Router();
    router.use((req, res, next) => {
        console.log("here", req.body);
        next(); 
    });
    router.get('/login', login)
    router.post('/signup', signUp)

    export default router;