import express from 'express';
import authenticateUser from '../middleware/auth.js';
const router = express.Router();

import reateLimiter from 'express-rate-limit';

const apiLimiter = reateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: 'Too many attempts, please try again later',
});

import { register, login, updateUser } from '../controllers/authController.js';

router.route('/register').post(apiLimiter, register);
router.route('/login').post(apiLimiter, login);

router.route('/updateUser').patch(authenticateUser, updateUser);

export default router;
