import express from 'express';

import { authController } from '@/controllers/auth.controller';
import { authMiddleware } from '@/middlewares/auth.middlewares';

const routerAuth = express.Router();

routerAuth.post('/login', authController.login);

routerAuth.post('/register', authController.register);

routerAuth.get('/me', authMiddleware, authController.info);

export default routerAuth;
