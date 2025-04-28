import { Router } from 'express';
import rateLimit from 'express-rate-limit';

import { login, logout, register } from '../controllers/authController.js';
import {
  validateRegisterInput,
  validateLoginInput,
} from '../middleware/validationMiddleware.js';

const router = Router();

const apiLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
  message: { msg: 'IP rate limit exceeded, retry in 10 minutes' },
});

router.post('/register', apiLimiter, validateRegisterInput, register);
router.post('/login', apiLimiter, validateLoginInput, login);
router.get('/logout', logout);

export default router;
